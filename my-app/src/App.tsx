import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './styles/Main.css';
import Navbar from './components/Navbar';
import Playlists from './pages/Playlists';
import Featured from './pages/Featured';
import SurveyPage from './pages/SurveyPage';
import ConcertsPage from './pages/ConcertsPage';
import LoginPage from './pages/LoginPage';
//import SongPlayer from './components/SongPlayer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="main-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/Playlists" element={<Playlists />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/ConcertsPage" element={<ConcertsPage />} />
          <Route path="/SurveyPage" element={<SurveyPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
