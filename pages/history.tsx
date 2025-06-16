import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';

export default function HistoryPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      // Fake history data (replace with Firestore or real DB later)
      setData(['Order #1234', 'Order #5678', 'Order #9999']);
    }
  }, [user, router]);

  const logout = async () => {
    await auth.signOut();
    router.push('/');
  };

  if (!user) return null;

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Order History</h1>
      <ul className="mb-4">
        {data.map((item, idx) => (
          <li key={idx} className="mb-2 border-b pb-1">{item}</li>
        ))}
      </ul>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2">Logout</button>
    </main>
  );
}
