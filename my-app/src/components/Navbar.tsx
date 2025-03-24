import React from 'react'
//import { Link } from "react-router-dom"; 
import "../styles/Navbar.css" 
//import NavbarButton from './NavbarButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
    <li><Link to="/">Home</Link></li> 
    <li><Link to="/search">Search</Link></li> 
    <li><Link to="/playlists">Playlists</Link></li> 
    <li><Link to="/survey">Survey Page</Link></li> 
    <li><Link to="/concerts">Concerts</Link></li> 
    <li><Link to="/login">Login Page</Link></li> 
    </div>
    
  );
}

export default Navbar