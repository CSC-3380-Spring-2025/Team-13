import React from 'react';
import { Routes, Route } from "react-router-dom";
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
import Settings from './pages/Settings';

function App() {
  return (
      <div className="main-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/Playlists" element={<Playlists />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/ConcertsPage" element={<ConcertsPage />} />
          <Route path="/SurveyPage" element={<SurveyPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
    </div>
  );
}

export default App;
