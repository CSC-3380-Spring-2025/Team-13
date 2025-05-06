import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import './styles/Main.css';
import './styles/Profile.css'

import Navbar from './components/Navbar';
import Playlists from './pages/Playlists';
import Feed from './pages/Feed';
import SurveyPage from './pages/SurveyPage';
import ConcertsPage from './pages/ConcertsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import Settings from './pages/Settings';
import SearchPage from './pages/SearchPage';
import PlayerPage from './pages/PlayerPage';
import ProfilePage from './pages/ProfilePage';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';
import CreatePost from './pages/CreatePost';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUsername');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  
  // All routes to every page on click
  return (
    <BrowserRouter>
      <div className="main-body">
        <Navbar />
        <Routes>
          <Route path="/" 
          // AuthRoute for secure sign in with
          element={<AuthRoute>
            <Home />
            </AuthRoute>} />
          <Route path="/SearchPage" element={<SearchPage setSelectedTrack={setSelectedTrack}
          />} />
          <Route path="/player/:id" element={<PlayerPage />} />
          <Route path="/Playlists" element={<Playlists />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path='/Create' element={<CreatePost />} />
          <Route path="/ConcertsPage" element={<ConcertsPage />} />
          <Route path="/SurveyPage" element={<SurveyPage />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/ProfilePage" element={<ProfilePage user={user} setUser={setUser} />} />
          <Route
            path="/LoginPage"
            element={
              user ? (
                <div className='profile-container'>
                  <h2>Welcome, {user}!</h2>
                  <button className='profile-logoutbutton' onClick={() => setUser(null)}>Log out</button>
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
                      <SignUpPage setUser={setUser}/>
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

export default Application