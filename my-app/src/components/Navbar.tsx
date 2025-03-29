import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
//import NavbarButton from './NavbarButton';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token'); // example
    navigate('/LoginPage');
  };

  const handleSettings = () => {
    localStorage.removeItem('token');
    navigate('/Settings')
  }

  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Impressions Audio</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/featured">Featured</Link></li>
        <li><Link to="/playlists">Playlists</Link></li>
        <li><Link to="/concertspage">Concerts Page</Link></li>
        <li><Link to="/surveypage">Survey Page</Link></li>
      </ul>
      <div className="settings-wrapper">
        <a onClick={handleSettings} className="settings-link">Settings</a>
      </div>
      <div className="signout-wrapper">
        <a onClick={handleSignOut} className="signout-link">Sign Out</a>
      </div>
    </div>
  );
};

export default Navbar;
