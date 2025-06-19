'use client';

import { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { addDays, parseISO } from 'date-fns';
import { useTranslation } from '@/hook/useTranslation';
import { UserData } from '@/types/User';
import { useAuth } from '@/context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// type DeliverySectionProps = {
//   holidayDates: string[];
// };

export default function DeliveryInformation() {
    const { t } = useTranslation()
    const { user, loading } = useAuth()
    const [userInfomation, setUserInformation] = useState<UserData | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if(loading) return
        if (!user) return;

        const fetchUserData = async () => {
        try {
            const userDocRef = doc(db, 'users', user.uid);
            const userSnap = await getDoc(userDocRef);

            if (!userSnap.exists()) {
            throw new Error('No user document found');
            }

            const data = userSnap.data();

            setUserInformation({
            email: user.email || '',
            phone: data.phone || '',
            address: data.address || '',
            name: data.name || '',
            });
            setName(data.name || '');
            setEmail(user.email || '');
            setPhone(data.phone || '');
            setAddress(data.address || '');
        } catch (err) {
            console.error(err);
            setError('Failed to load user data');
        }
        };

        fetchUserData();
    }, [user, loading]);

    if (!user) return <p style={{color: 'red'}}>{t("注文するにはログインする必要があります。")}</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!userInfomation) return <p>Loading...</p>;
  return (
    <div>
        <h2>{t("配送情報")}</h2>
        <div className="info-grid">
        <div className="label">{t("フルネーム")}:</div>
        <input value={name}
      onChange={(e) => setName(e.target.value)} type="text" placeholder={t("フルネーム")} />

        <div className="label">Email:</div>
        <input value={email}
      onChange={(e) => setEmail(e.target.value)} type="email" placeholder={"a@gmail.com"} />

        <div className="label">{t("電話番号")}:</div>
        <input value={phone}
      onChange={(e) => setPhone(e.target.value)} type="tel" placeholder={t("電話番号")} />

        <div className="label">{t("配送先住所")}:</div>
        <textarea value={address}
      onChange={(e) => setAddress(e.target.value)} placeholder={t("配送先住所")} rows={3}></textarea>
      </div>

      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 2rem;
          font-family: sans-serif;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 1rem 1rem;
          align-items: center;
        }

        .label {
          text-align: right;
          font-weight: 500;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        @media (max-width: 500px) {
          .info-grid {
            grid-template-columns: 1fr;
          }

          .label {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
