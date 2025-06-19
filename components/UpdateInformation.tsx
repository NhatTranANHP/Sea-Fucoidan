'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useTranslation } from '@/hook/useTranslation';

export default function UpdateInformation() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!user) return;

    const loadUserData = async () => {
      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setEmail(user.email || '');
          setName(data.name || '');
          setPhone(data.phone || '');
          setAddress(data.address || '');
        } else {
          setError('No user data found.');
        }
      } catch (err) {
        console.error('Error loading user data:', err);
        setError('Failed to load user info.');
      }
    };

    loadUserData();
  }, [user]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        name,
        phone,
        address,
      });
      setError(null);
      alert('Information updated!');
    } catch (err) {
      console.error('Update failed:', err);
      setError('Failed to update information.');
    }
  };

  if (!user) return <p>{t("アカウント情報を変更するにはログインする必要があります。")}</p>;

  return (
    <div style={{margin: '0 auto' }}>
      <form 
  onSubmit={handleUpdate} 
  style={{ 
    display: 'grid', 
    gap: '1.5rem',
    width: '100%',
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0, 46, 80, 0.1)',
    boxSizing: 'border-box'
  }}
>
  <h2 style={{ 
    color: 'rgba(0, 46, 80, 0.85)', 
    margin: '0 0 1rem 0',
    textAlign: 'center'
  }}>
    {t("アカウント情報")}
  </h2>

  <div style={{ display: 'grid', gap: '0.5rem' }}>
    <label style={{ 
      color: 'rgba(0, 46, 80, 0.85)',
      fontWeight: '500',
      fontSize: '1.5rem'
    }}>
      Email
    </label>
    <input 
      type="email" 
      value={email} 
      readOnly 
      style={{ 
        width: '100%',
        padding: '0.75rem',
        border: '1px solid rgba(0, 46, 80, 0.2)',
        borderRadius: '4px',
        backgroundColor: 'rgba(0, 46, 80, 0.05)',
        color: 'rgba(0, 46, 80, 0.7)',
        boxSizing: 'border-box'
      }} 
    />
  </div>

  <div style={{ display: 'grid', gap: '0.5rem' }}>
    <label style={{ 
      color: 'rgba(0, 46, 80, 0.85)',
      fontWeight: '500',
      fontSize: '1.5rem'
    }}>
      {t("フルネーム")}
    </label>
    <input 
      type="text" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      required 
      style={{ 
        width: '100%',
        padding: '0.75rem',
        border: '1px solid rgba(0, 46, 80, 0.2)',
        borderRadius: '4px',
        backgroundColor: 'white',
        color: 'rgba(0, 46, 80, 0.85)',
        boxSizing: 'border-box'
      }} 
    />
  </div>

  <div style={{ display: 'grid', gap: '0.5rem' }}>
    <label style={{ 
      color: 'rgba(0, 46, 80, 0.85)',
      fontWeight: '500',
      fontSize: '1.5rem'
    }}>
      {t("電話番号")}
    </label>
    <input 
      type="tel" 
      value={phone} 
      onChange={(e) => setPhone(e.target.value)} 
      required 
      style={{ 
        width: '100%',
        padding: '0.75rem',
        border: '1px solid rgba(0, 46, 80, 0.2)',
        borderRadius: '4px',
        backgroundColor: 'white',
        color: 'rgba(0, 46, 80, 0.85)',
        boxSizing: 'border-box'
      }} 
    />
  </div>

  <div style={{ display: 'grid', gap: '0.5rem' }}>
    <label style={{ 
      color: 'rgba(0, 46, 80, 0.85)',
      fontWeight: '500',
      fontSize: '1.5rem'
    }}>
      {t("配送先住所")}
    </label>
    <textarea 
      value={address} 
      onChange={(e) => setAddress(e.target.value)} 
      rows={3} 
      required 
      style={{ 
        width: '100%',
        padding: '0.75rem',
        border: '1px solid rgba(0, 46, 80, 0.2)',
        borderRadius: '4px',
        backgroundColor: 'white',
        color: 'rgba(0, 46, 80, 0.85)',
        resize: 'vertical',
        boxSizing: 'border-box'
      }} 
    />
  </div>

  <button 
    type="submit" 
    style={{ 
      backgroundColor: 'rgba(0, 46, 80, 0.85)',
      color: 'white',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '4px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      marginTop: '0.5rem'
    }}
    onMouseOver={(e) => {
      const target = e.target as HTMLButtonElement;
      target.style.backgroundColor = 'rgba(0, 46, 80, 1)';
    }}
    onMouseOut={(e) => {
      const target = e.target as HTMLButtonElement;
      target.style.backgroundColor = 'rgba(0, 46, 80, 0.85)';
    }}
  >
    {t("アップデート")}
  </button>

  {error && <p style={{ 
    color: '#d32f2f',
    backgroundColor: '#fde8e8',
    padding: '0.75rem',
    borderRadius: '4px',
    margin: '0',
    fontSize: '1.5rem',
    boxSizing: 'border-box'
  }}>
    {error}
  </p>}
</form>
    </div>
  );
}