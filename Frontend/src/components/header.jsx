import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/api';

export default function Header({ user, onLogout }) {
    const nav = useNavigate();
    function doLogout() { logout(); onLogout && onLogout(); nav('/'); }
    const logged = !!localStorage.getItem('token');
    return (
        <header className="bg-gradient-to-r from-white via-slate-50 to-white border-b">
            <div className="container flex items-center justify-between">
                <div className="py-4 flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold">CC</div>
                        <div>
                            <div className="text-lg font-bold">Complaint CMS</div>
                            <div className="text-xs text-slate-500">Support & Tickets</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 px-6">
                    <div className="max-w-xl mx-auto">
                        <input aria-label="Search tickets" placeholder="Search tickets, users, or IDs" className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-300" />
                    </div>
                </div>

                <nav className="flex items-center gap-3">
                    <Link className="text-slate-700 hover:text-accent" to="/dashboard">Dashboard</Link>
                    <Link className="text-slate-700 hover:text-accent" to="/create">Create</Link>
                    <Link className="text-slate-700 hover:text-accent" to="/agent">Agent</Link>
                    <Link className="text-slate-700 hover:text-accent" to="/admin">Analytics</Link>
                    {!logged ? (
                        <>
                            <Link className="text-slate-700" to="/login">Login</Link>
                            <Link className="btn" to="/register">Register</Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-3">
                            <div className="text-sm text-slate-600">Hi, <strong className="text-slate-800">{user?.name || 'You'}</strong></div>
                            <button className="w-9 h-9 rounded-full bg-indigo-600 text-white" title="Profile">{(user?.name || 'U').slice(0, 1).toUpperCase()}</button>
                            <button className="btn" onClick={doLogout}>Logout</button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}