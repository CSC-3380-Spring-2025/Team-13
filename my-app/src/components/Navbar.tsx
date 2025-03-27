import React from 'react'
//import { Link } from "react-router-dom"; 
import "../components/NavbarButton.css"
import { Link } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/featured">Featured</Link></li>
      <li><Link to="/playlists">Playlists</Link></li>
      <li><Link to="/concertspage">Concerts Page</Link></li>
      <li><Link to="/surveypage">Survey Page</Link></li>
      <li><Link to="/loginpage">Login Page</Link></li>
    </div>
    <NavbarButton />
  </div>
  );
}

export default Navbar