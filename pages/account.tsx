import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import Layout from "@/components/Layout";
import { getOrdersByUserId } from '@/lib/getCartHistory';
import { CartItem, PaymentInfo } from '@/context/CartContext';
import { useTranslation } from '@/hook/useTranslation';
import UpdateInformation from '@/components/UpdateInformation';


export default function HistoryPage() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<
    {
      id: string;
      items: CartItem[];
      userId: string;
      createdAt: string;
      email: string;
      payment: PaymentInfo;
    }[]
  >([]);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push('/');
    } else {
      if (user && !loading) {
        const fetchOrders = async () => {
          const result = await getOrdersByUserId(user.uid);
          setData(result as {
      id: string;
      items: CartItem[];
      userId: string;
      createdAt: string;
      email: string;
      payment: PaymentInfo;
    }[]);
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

  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // You can adjust this number

  return (
    <Layout>
      <div style={{padding: '30px'}}>
        <UpdateInformation />
      <h2 className="text-xl font-bold mb-4" style={{marginTop: '20px',color: 'rgba(0, 46, 80, 0.85)', margin: '0px 0px 1rem', textAlign: 'center'}}>{t("注文履歴")}</h2>
      {data.length === 0 ? (
    <p>{t("まだ注文はありません")}</p>
  ) : 
  (
    <div style={{ width: '100%', padding: '1rem', boxSizing: 'border-box' }}>
  {/* Order List */}
  {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((order) => (
    <div 
      key={order.id} 
      style={{
        border: '1px solid rgba(0, 46, 80, 0.1)',
        marginTop: '1rem',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        boxShadow: '0 1px 3px 0 rgba(0, 46, 80, 0.1)',
        backgroundColor: 'white',
        fontSize: '1.5rem'
      }}
    >
      <div style={{ 
        display: 'grid',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ fontSize: '1.5rem', color: 'rgba(0, 46, 80, 0.85)' }}>
          <strong>{t("カートID")}:</strong> {order.id}
        </div>
        <div style={{ fontSize: '1.5rem', color: 'rgba(0, 46, 80, 0.85)' }}>
          <strong>Email:</strong> {order.email}
        </div>
        <div style={{ fontSize: '1.5rem', color: 'rgba(0, 46, 80, 0.85)' }}>
          <strong>{t("請求書ID")}:</strong> {order.payment.id}
        </div>
        <div style={{ fontSize: '1.5rem', color: 'rgba(0, 46, 80, 0.85)' }}>
          <strong>{t("注文時間")}:</strong> {new Date(order.createdAt).toLocaleString()}
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h2 style={{ 
          fontWeight: '600',
          color: 'rgba(0, 46, 80, 0.85)',
          fontSize: '1.7rem',
          marginBottom: '1rem'
        }}>
          {t("ショッピングカートリスト")}:
        </h2>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '1.5rem'
          }}>
            <thead style={{ backgroundColor: 'rgba(0, 46, 80, 0.05)' }}>
              <tr>
                <th style={{ 
                  border: '1px solid rgba(0, 46, 80, 0.1)',
                  padding: '0.75rem',
                  textAlign: 'left',
                  color: 'rgba(0, 46, 80, 0.85)'
                }}>{t("製品タイプ")}</th>
                <th style={{ 
                  border: '1px solid rgba(0, 46, 80, 0.1)',
                  padding: '0.75rem',
                  textAlign: 'right',
                  color: 'rgba(0, 46, 80, 0.85)'
                }}>{t("量")}</th>
                <th style={{ 
                  border: '1px solid rgba(0, 46, 80, 0.1)',
                  padding: '0.75rem',
                  textAlign: 'right',
                  color: 'rgba(0, 46, 80, 0.85)'
                }}>{t("価値")}</th>
                <th style={{ 
                  border: '1px solid rgba(0, 46, 80, 0.1)',
                  padding: '0.75rem',
                  textAlign: 'right',
                  color: 'rgba(0, 46, 80, 0.85)'
                }}>{t("合計金額")}</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td style={{ 
                    border: '1px solid rgba(0, 46, 80, 0.1)',
                    padding: '0.75rem',
                    color: 'rgba(0, 46, 80, 0.75)'
                  }}>{t(item.title)}</td>
                  <td style={{ 
                    border: '1px solid rgba(0, 46, 80, 0.1)',
                    padding: '0.75rem',
                    textAlign: 'right',
                    color: 'rgba(0, 46, 80, 0.75)'
                  }}>{item.quantity}</td>
                  <td style={{ 
                    border: '1px solid rgba(0, 46, 80, 0.1)',
                    padding: '0.75rem',
                    textAlign: 'right',
                    color: 'rgba(0, 46, 80, 0.75)'
                  }}>{item.price} {t(item.currency)}</td>
                  <td style={{ 
                    border: '1px solid rgba(0, 46, 80, 0.1)',
                    padding: '0.75rem',
                    textAlign: 'right',
                    color: 'rgba(0, 46, 80, 0.75)'
                  }}>{item.price * item.quantity} {t(item.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ 
        marginTop: '1.5rem',
        textAlign: 'right',
        fontWeight: '600',
        fontSize: '2.0rem',
        color: 'rgba(0, 46, 80, 0.85)'
      }}>
        {t("合計金額")}: {order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)} {t(order.items[0].currency)}
      </div>
    </div>
  ))}

  {/* Pagination */}
  {data.length > itemsPerPage && (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: currentPage === 1 ? 'rgba(0, 46, 80, 0.1)' : 'rgba(0, 46, 80, 0.85)',
          color: currentPage === 1 ? 'rgba(0, 46, 80, 0.5)' : 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
        }}
      >
        Previous
      </button>
      
      {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: currentPage === index + 1 ? 'rgba(0, 46, 80, 0.85)' : 'rgba(0, 46, 80, 0.1)',
            color: currentPage === index + 1 ? 'white' : 'rgba(0, 46, 80, 0.85)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {index + 1}
        </button>
      ))}
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(data.length / itemsPerPage)))}
        disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: currentPage === Math.ceil(data.length / itemsPerPage) ? 'rgba(0, 46, 80, 0.1)' : 'rgba(0, 46, 80, 0.85)',
          color: currentPage === Math.ceil(data.length / itemsPerPage) ? 'rgba(0, 46, 80, 0.5)' : 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: currentPage === Math.ceil(data.length / itemsPerPage) ? 'not-allowed' : 'pointer'
        }}
      >
        Next
      </button>
    </div>
  )}

  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <button 
      onClick={logout} 
      style={{
        backgroundColor: '#d32f2f',
        color: 'white',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '4px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        marginTop: '2rem'
      }}
      onMouseOver={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = '#b71c1c';
      }}
      onMouseOut={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = '#d32f2f';
      }}
    >
      {t("Đăng xuất")}
    </button>
  </div>
</div>
  )}
      </div>
    </Layout>
  );
}
