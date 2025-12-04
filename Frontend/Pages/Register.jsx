import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function handleRegister(e){
    e.preventDefault();
    try{
      await api.post('/auth/register',{name,email,password});
      alert('Registered. Please login.');
      nav('/login');
    }catch(err){
      alert(err?.response?.data?.message || 'Registration error');
    }
  }

  return (
    <div className="container">
      <div className="card max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
          <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <div className="flex justify-end">
            <button className="btn" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
