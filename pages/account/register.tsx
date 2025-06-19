import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from "@/components/Layout";
import { useTranslation } from '@/hook/useTranslation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();
  const { t } = useTranslation();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const res = await fetch('/api/register', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ name, email, password }),
  //   });

  //   if (res.ok) {
  //     router.push('/history');
  //   } else {
  //     const err = await res.json();
  //     alert(err.message || 'Signup failed');
  //   }
  // };

  const signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        phone: "",
        address: "",
        createdAt: new Date().toISOString()
      });
      router.push('/account');
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <Layout>
            <main id="MainContent" className="content-for-layout focus-none" role="main">
  <div id="shopify-section-template--20903563919645__main" className="shopify-section">
    <div className="customer register section-template--20903563919645__main-padding">
      <h2>{t("アカウントを作成する")}</h2>
      <form id="create_customer" acceptCharset="UTF-8" noValidate={true} name="create_customer">
        <input type="hidden" name="form_type" value="create_customer"/>
        <input type="hidden" name="utf8" value="✓"/>
        <div className="field">
          <input type="text" value={name}
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        required name="customer[name]" id="RegisterForm-Name" autoComplete="given-name" /> 
          <label htmlFor="RegisterForm-Name">{t("名前")}</label>
        </div>
        <div className="field">
          <input type="email" value={email}
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        required id="RegisterForm-email" spellCheck="false" autoCapitalize="off" autoComplete="email" aria-required="true" className=""/> 
          <label htmlFor="RegisterForm-email">{t("メール")}</label>
        </div>
        <div className="field">
          <input type="password" value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required id="RegisterForm-password" aria-required="true" className=""/> 
          <label htmlFor="RegisterForm-password" className="sf-password">{t("パスワード")}</label>
        </div>
        <button type='button' onClick={signup} id="sf-register">{t("作成する")}</button>
      </form>
    </div>
  </div>
</main>
        </Layout>
  );
}
