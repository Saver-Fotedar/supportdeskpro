import React, {useState, useEffect} from 'react';

function Tickets(){
  const [tickets, setTickets] = useState([]);
  useEffect(()=> setTickets(JSON.parse(localStorage.getItem('support.tickets')||'[]')), []);
  function resolve(i){
    const t = [...tickets]; t[i].status='Resolved'; setTickets(t); localStorage.setItem('support.tickets', JSON.stringify(t));
  }
  return (
    <div>
      <div className="card"><h2>Tickets</h2></div>
      <table className="table card">
        <thead><tr><th>Title</th><th>Severity</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {tickets.length===0 && <tr><td colSpan="4" className="small">No tickets yet. Create one from 'Create Ticket'.</td></tr>}
          {tickets.map((t,i)=>(
            <tr key={i}>
              <td>{t.title}<div className="small">{t.steps}</div></td>
              <td>{t.severity}</td>
              <td>{t.status}</td>
              <td><button className="btn" onClick={()=>resolve(i)}>Resolve</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tickets;
