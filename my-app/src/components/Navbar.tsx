import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar: React.FC = () => {

  return (
    <nav>
       <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/playlists">Playlists</Link></li>
      <li><Link to="/survey">Survey Page</Link></li>
      <li><Link to="/concerts">Concerts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

