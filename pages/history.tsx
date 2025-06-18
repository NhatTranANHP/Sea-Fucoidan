import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import Layout from "@/components/Layout";
import { getOrdersByUserId } from '@/lib/getCartHistory';
import { CartItem } from '@/context/CartContext';


export default function HistoryPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<{id:string, items: CartItem[], userId:String, createdAt:string, email:String, payment:string}[]>([]);

  useEffect(() => {
    if (loading) return; // Don't run until auth is ready

    if (!user) {
      router.push('/');
    } else {
      if (user && !loading) {
        const fetchOrders = async () => {
          const result = await getOrdersByUserId(user.uid);
          setData(result as {id:string, items: CartItem[], userId:String, createdAt:string, email:String, payment:string}[]); // ✅ now you have the value here
          console.log('Fetched orders:', result);
        };

        fetchOrders();
      }
      // Replace with Firestore later
      // setData(['Order #1234', 'Order #5678', 'Order #9999']);
    }
  }, [user, loading, router]);

  if (loading || (!user && typeof window !== 'undefined')) {
    return <p>Checking login status...</p>;
  }

  const logout = async () => {
    await auth.signOut();
    router.push('/');
  };

  if (!user) return null;

  return (
    <Layout>
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Order History</h1>
      {data.length === 0 ? (
    <p>No orders yet.</p>
  ) : (
    data.map((order) => (
      <div key={order.id} className="border rounded-xl p-4 mb-6 shadow">
        <div className="text-sm text-gray-600">Order ID: <strong>{order.id}</strong></div>
        <div className="text-sm text-gray-600">Email: {order.email}</div>
        <div className="text-sm text-gray-600">Payment Method: {order.payment.id}</div>
        <div className="text-sm text-gray-600">Date: {new Date(order.createdAt).toLocaleString()}</div>

        <div className="mt-4">
          <h2 className="font-semibold">Items:</h2>
          <table className="w-full mt-2 text-sm border border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1 text-left">Title</th>
                <th className="border px-2 py-1 text-right">Quantity</th>
                <th className="border px-2 py-1 text-right">Price</th>
                <th className="border px-2 py-1 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">{item.title}</td>
                  <td className="border px-2 py-1 text-right">{item.quantity}</td>
                  <td className="border px-2 py-1 text-right">¥{item.price}</td>
                  <td className="border px-2 py-1 text-right">¥{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2 text-right font-bold">
          Total: ¥{order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </div>
      </div>
    ))
  )}
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2">Logout</button>
    </main>
    </Layout>
  );
}
