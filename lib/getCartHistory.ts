import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const getOrdersByUserId = async (userId: string) => {
  try {
    const ordersRef = collection(db, 'orders');
    const q = query(
      ordersRef,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc') // Optional: newest first
    );

    const querySnapshot = await getDocs(q);

    const orders = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate().toISOString() || null,
      };
    });

    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};