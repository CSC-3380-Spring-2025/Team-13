import '../styles/ConcertsPage.css'
import { useState } from "react";
import axios from "axios";

export default function Concerts() {
  const [city, setCity] = useState("");
  const [events, setEvents] = useState([]);

  const getConcerts = async () => {
    const response = await axios.get(`http://localhost:8000/concerts?city=${city}`);
    setEvents(response.data._embedded?.events || []);
  };

  return (
    <div className='concert-container'>
    <div className="search-box">
      <input
        type="text"
        placeholder="See what's near you"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-box2"
      />
      <button onClick={getConcerts} className="search-button">Search</button>

      <div>
        {events.map((event: any) => (
          <div key={event.id} className="song-card">
            <h2>{event.name}</h2>
            <p>{event.dates.start.localDate}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
