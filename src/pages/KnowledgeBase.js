import React from 'react';

const articles = [
  {title:'Tasks not showing', body:'Cause: localStorage issues. Fix: Clear site data or use supported browser.'},
  {title:'Login failed (simulated)', body:'Simulated error: Check console for SIM_ERROR_LOGIN and collect reproduction steps.'},
  {title:'API timeout (simulated)', body:'Simulated error: Check network, retry, and provide logs.'}
];

function KnowledgeBase(){
  return (
    <div>
      <div className="card"><h2>Knowledge Base</h2><p className="small">Common fixes and troubleshooting guides.</p></div>
      <div className="grid">
        {articles.map((a,i)=>(
          <div className="card" key={i}>
            <h3>{a.title}</h3>
            <p className="small">{a.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnowledgeBase;
