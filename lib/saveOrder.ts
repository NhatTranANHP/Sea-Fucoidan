// lib/saveOrder.ts
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { CartItem, OrderData } from '@/context/CartContext';
import { User } from 'firebase/auth';

interface CaptureData {
  status: string;
  id: string;
  payer: string;
  purchase_units?: {
    amount?: {
      value?: string;
      currency_code?: string;
    };
  }[];
}

export async function saveOrderToFirestore(
  user: User,
  cartItems: CartItem[],
  totalPrice: number,
  currency: string,
  captureData: CaptureData
): Promise<void> {
  const orderRef = doc(db, 'orders', `${user.uid}_${Date.now()}`);

  const orderData: OrderData = {
    userId: user.uid,
    email: user.email || '',
    items: cartItems,
    payment: {
      status: captureData.status,
      id: captureData.id,
      payer: captureData.payer,
      amount: totalPrice.toString(),
      currency: currency,
    },
    createdAt: serverTimestamp(),
  };

  await setDoc(orderRef, orderData);
}
