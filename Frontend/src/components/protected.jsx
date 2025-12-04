import React from 'react';

const priorityStyles = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800'
};

export default function TicketCard({ t, onAction }) {
    return (
    <article className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-800">{t.title}</h3>
          <p className="text-sm text-slate-600 mt-1 max-h-16 overflow-hidden">{t.description}</p>
          <div className="mt-3 text-xs text-slate-500">Created: {new Date(t.createdAt).toLocaleString()}</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={px-2 py-1 rounded-full text-xs font-semibold ${priorityStyles[t.priority] || priorityStyles.Low}}>{t.priority}</span>
          <span className="text-sm font-medium text-slate-700">{t.status}</span>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        {onAction && <button onClick={()=>onAction('request', t)} className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Request Info</button>}
        {onAction && <button onClick={()=>onAction('resolve', t)} className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">Mark Resolved</button>}
        <button onClick={()=>window.open(/api/tickets/${t._id})} className="px-3 py-1 bg-slate-100 text-slate-700 rounded">View</button>
      </div>
    </article >
  );
}