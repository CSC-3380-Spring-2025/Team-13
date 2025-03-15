import { Link } from "react-router-dom";
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/playlists">Playlists</Link></li>
      <li><Link to="/survey">Survey Page</Link></li>
      <li><Link to="/concerts">Concerts</Link></li>
    </div>
  )
}
