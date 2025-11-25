import React from 'react';

function ErrorSimulator(){
  function sim(type){
    if(type==='login'){
      console.error('SIM_ERROR: Login failed - invalid credentials (simulated)');
      alert('Simulated login failure: check console (SIM_ERROR_LOGIN)');
    } else if(type==='api'){
      console.error('SIM_ERROR: API timeout - 504 (simulated)');
      alert('Simulated API failure: check console (SIM_ERROR_API)');
    } else {
      console.error('SIM_ERROR: Unknown (sim)');
      alert('Simulated unknown error');
    }
  }
  return (
    <div>
      <div className="card"><h2>Error Simulator</h2><p className="small">Simulate common client errors for debugging practice.</p></div>
      <div className="grid">
        <div className="card"><h3>Login Failure</h3><p className="small">Simulate credential errors.</p><button className="btn" onClick={()=>sim('login')}>Simulate Login</button></div>
        <div className="card"><h3>API Timeout</h3><p className="small">Simulate network/API issues.</p><button className="btn" onClick={()=>sim('api')}>Simulate API</button></div>
      </div>
    </div>
  );
}

export default ErrorSimulator;
