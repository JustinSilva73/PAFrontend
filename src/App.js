import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './LogIn/page';
import SwitchPage from './SwitchPage/page';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/jarvis" element={<SwitchPage />} />
            <Route path="/" element={<LogIn />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;