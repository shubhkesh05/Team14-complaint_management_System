import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login({onLogin}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function handleLogin(e){
    e.preventDefault();
    try{
      const res = await api.post('/auth/login',{email,password});
      localStorage.setItem('token', res.data.token);
      onLogin && onLogin(res.data.user);
      nav('/dashboard');
    }catch(err){
      alert(err?.response?.data?.message || 'Login failed');
    }
  }

  return (
    <div className="container">
      <div className="card max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <div className="flex justify-end">
            <button className="btn" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
