import React, {useState} from 'react';
import api from '../services/api';

export default function CreateTicket(){
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [priority,setPriority]=useState('Low');
  const [category,setCategory]=useState('General');
  const [files,setFiles]=useState([]);

  function onFiles(e){ setFiles(Array.from(e.target.files)); }

  async function handleSubmit(e){
    e.preventDefault();
    try{
      let attachments = [];
      if(files.length){
        const fd = new FormData(); files.forEach(f=>fd.append('files', f));
        const up = await api.post('/upload', fd, { headers: {'Content-Type':'multipart/form-data'} });
        attachments = up.data.files;
      }
      const res = await api.post('/tickets', { title, description: desc, priority, category, attachments });
      alert('Ticket created: '+res.data.ticketId);
      setTitle(''); setDesc(''); setPriority('Low'); setFiles([]);
    }catch(err){
      alert(err?.response?.data?.message || err.message);
    }
  }

  return (
    <div className="container">
      <div className="card max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Lodge a Complaint</h2>
        <p className="text-sm text-slate-500 mb-4">Provide a clear title and as much detail as possible. Attach screenshots or documents if helpful.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <input className="input mt-1" required placeholder="Short, descriptive title" value={title} onChange={e=>setTitle(e.target.value)} />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea className="input mt-1 h-36" required placeholder="Describe the issue with steps to reproduce" value={desc} onChange={e=>setDesc(e.target.value)} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-sm font-medium">Category</label>
              <input className="input mt-1" value={category} onChange={e=>setCategory(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium">Priority</label>
              <select className="input mt-1" value={priority} onChange={e=>setPriority(e.target.value)}>
                <option>Low</option><option>Medium</option><option>High</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Attachments</label>
              <input className="mt-1" type="file" multiple onChange={onFiles} />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {files.map((f,i)=> <div key={i} className="text-sm text-slate-700">{f.name}</div>)}
          </div>

          <div className="flex justify-end">
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
