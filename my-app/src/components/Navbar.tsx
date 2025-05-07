import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/ProfilePage');
  };

  const handleSettings = () => {
    localStorage.removeItem('token');
    navigate('/Settings')
  }

  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Impressions Audio</h1>
      <ul className="navbar-links">
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/searchpage">Search</Link></li>
        <li><Link to="/concertspage">Concerts</Link></li>
        <li><Link to="/playlists">Top Songs</Link></li>
        <li><Link to="/surveypage">Survey</Link></li>
      </ul>
      <div className='settings-wrapper'>
        <button onClick={handleSettings} className='settings-link'>Settings</button>
      </div>
      <div className="signout-wrapper">
        <button onClick={handleSignOut} className="signout-link">Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
