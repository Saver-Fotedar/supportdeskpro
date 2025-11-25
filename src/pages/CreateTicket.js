import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTicket(){
  const [title,setTitle]=useState(''); const [steps,setSteps]=useState(''); const [severity,setSeverity]=useState('Medium');
  const navigate = useNavigate();
  function submit(){
    if(!title){alert('Enter title'); return;}
    const arr = JSON.parse(localStorage.getItem('support.tickets')||'[]');
    arr.unshift({title,steps,severity,status:'Open',created:Date.now()});
    localStorage.setItem('support.tickets', JSON.stringify(arr));
    alert('Ticket created');
    navigate('/tickets');
  }
  return (
    <div className="card">
      <h2>Create Ticket</h2>
      <div>
        <label>Issue Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Short title" />
      </div>
      <div>
        <label>Steps to Reproduce</label>
        <textarea value={steps} onChange={e=>setSteps(e.target.value)} placeholder="Step 1, Step 2..." />
      </div>
      <div>
        <label>Severity</label>
        <select value={severity} onChange={e=>setSeverity(e.target.value)}>
          <option>Low</option><option>Medium</option><option>High</option>
        </select>
      </div>
      <br/>
      <button className="btn" onClick={submit}>Submit Ticket</button>
    </div>
  );
}

export default CreateTicket;
