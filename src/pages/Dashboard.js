import React from 'react';

function Dashboard(){
  const tickets = JSON.parse(localStorage.getItem('support.tickets')||'[]');
  const open = tickets.filter(t=>t.status!=='Resolved').length;
  const resolved = tickets.filter(t=>t.status==='Resolved').length;
  return (
    <div>
      <div className="card">
        <h2>Dashboard</h2>
        <p className="small">Overview of support activity.</p>
        <div className="grid">
          <div className="card"><h3>{open}</h3><p className="small">Open Tickets</p></div>
          <div className="card"><h3>{resolved}</h3><p className="small">Resolved</p></div>
          <div className="card"><h3>—</h3><p className="small">Avg. Resolution Time</p></div>
        </div>
      </div>
      <div className="card">
        <h3>Recent Activity</h3>
        <p className="small">Use the Tickets page to view and triage incoming reports.</p>
      </div>
    </div>
  );
}

export default Dashboard;
