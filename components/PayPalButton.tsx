'use client';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const PayPalCheckout = () => {
  const { getCartTotal } = useCart();
  const [error, setError] = useState<string | null>(null);

  const createOrder = async () => {
    try {
      const total = getCartTotal();
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      });

      const orderData = await response.json();
      if (orderData.orderID) {
        return orderData.orderID;
      } else {
        throw new Error(orderData.error || 'Failed to create order');
      }
    } catch (err) {
      setError('Error creating order. Please try again.');
      console.error(err);
    }
  };

  const onApprove = async (data: {orderID: string}) => {
    try {
      const response = await fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      const captureData = await response.json();
      if (captureData.status === 'COMPLETED') {
        alert('Payment successful!');
        // Optionally: clear cart, redirect, etc.
      } else {
        throw new Error(captureData.error || 'Payment failed');
      }
    } catch (err) {
      setError('Payment failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
          currency: 'USD',
          intent: 'capture',
        }}
      >
        <PayPalButtons
          style={{ layout: 'vertical', height: 50 }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={(err) => {
            console.error(err);
            setError('An error occurred during payment.');
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalCheckout;
