import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import CreateTicket from './pages/CreateTicket';
import KnowledgeBase from './pages/KnowledgeBase';
import Training from './pages/Training';
import ErrorSimulator from './pages/ErrorSimulator';

function App(){
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">SupportDeskPro</div>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/create">Create Ticket</Link>
          <Link to="/kb">Knowledge Base</Link>
          <Link to="/training">Training</Link>
          <Link to="/simulator">Simulator</Link>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/tickets" element={<Tickets/>} />
          <Route path="/create" element={<CreateTicket/>} />
          <Route path="/kb" element={<KnowledgeBase/>} />
          <Route path="/training" element={<Training/>} />
          <Route path="/simulator" element={<ErrorSimulator/>} />
        </Routes>
      </main>
      <footer className="footer">Built by Saver Fotedar — Demo Project</footer>
    </div>
  );
}

export default App;
