// src/pages/Login.jsx
import { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
        <input type="email" placeholder="E-posta" value={email} onChange={e => setEmail(e.target.value)} className="mb-3 w-full border p-2 rounded" required />
        <input type="password" placeholder="Şifre" value={password} onChange={e => setPassword(e.target.value)} className="mb-3 w-full border p-2 rounded" required />
        <button className="w-full bg-primary text-white py-2 rounded mb-2">Giriş Yap</button>
        <a href="/forgot-password" className="text-sm text-primary block text-center">Şifremi Unuttum</a>
      </form>
    </div>
  );
}