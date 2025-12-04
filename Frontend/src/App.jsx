import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateTicket from './pages/CreateTicket';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';

export default function App(){
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header user={user} onLogout={()=>setUser(null)} />
        <div className="container">
          <Routes>
            <Route path="/" element={<h2 className="text-2xl font-semibold">Welcome to Complaint CMS</h2>} />
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/create" element={<ProtectedRoute><CreateTicket/></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
