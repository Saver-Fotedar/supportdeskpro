import React from 'react';

function Training(){
  return (
    <div>
      <div className="card"><h2>Client Training</h2><p className="small">Training materials, demo script, and quick start guide.</p></div>
      <div className="card">
        <h3>Quick Start</h3>
        <ol>
          <li>Open TaskFlow demo and create tasks.</li>
          <li>Demonstrate data persistence and basic workflows.</li>
          <li>Show how to report issues using the Create Ticket form.</li>
        </ol>
      </div>
      <div className="card">
        <h3>Demo Script (short)</h3>
        <p className="small">Intro → Live demo → Troubleshooting checklist → Q&A</p>
      </div>
    </div>
  );
}

export default Training;
