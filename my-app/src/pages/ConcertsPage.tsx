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
    <div className="p-6 bg-gray-800 text-white">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded text-black"
      />
      <button onClick={getConcerts} className="bg-blue-500 p-2 ml-2">Find Concerts</button>

      <div>
        {events.map((event: any) => (
          <div key={event.id} className="p-4 border-b">
            <h2>{event.name}</h2>
            <p>{event.dates.start.localDate}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
