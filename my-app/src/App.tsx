import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './styles/Main.css';
import Navbar from './components/Navbar';
import Playlists from './pages/Playlists';
import Featured from './pages/Featured';
import SurveyPage from './pages/SurveyPage';
import ConcertsPage from './pages/ConcertsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import Settings from './pages/Settings';
import SearchPage from './pages/SearchPage';

function App() {
  const [selectedTrack, setSelectedTrack] = useState<any>(null);
  const [user, setUser] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState<boolean>(true);

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
          <Route path="/Settings" element={<Settings />} />
          <Route
            path="/LoginPage"
            element={
              user ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                  <h2>Welcome, {user}!</h2>
                  <button onClick={() => setUser(null)}>Log out</button>
                </div>
              ) : (
                <div className="login-container">
                  {showLogin ? (
                    <>
                      <LoginPage setUser={setUser} />
                      <p className='account-login'>
                        Don't have an account?{" "}
                        <button onClick={() => setShowLogin(false)}>Sign up</button>
                      </p>
                    </>
                  ) : (
                    <>
                      <SignUpPage />
                      <p className='account-done'>
                        Have an account with us?{" "}
                        <button onClick={() => setShowLogin(true)}>Login</button>
                      </p>
                    </>
                  )}
                </div>
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
