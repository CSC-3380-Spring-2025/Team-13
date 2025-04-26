import { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import './styles/Main.css';
import Navbar from './components/Navbar';
import Playlists from './pages/Playlists';
import Featured from './pages/Featured';
import SurveyPage from './pages/SurveyPage';
import ConcertsPage from './pages/ConcertsPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Settings from './pages/Settings';
import SearchPage from './pages/SearchPage';

function App() {
  const [selectedTrack, setSelectedTrack] = useState<any>(null);

  return (
    <BrowserRouter>
      <div className="main-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SearchPage" element={<SearchPage setSelectedTrack={setSelectedTrack} />} />      
          <Route path="/Playlists" element={<Playlists />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/ConcertsPage" element={<ConcertsPage />} />
          <Route path="/SurveyPage" element={<SurveyPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
