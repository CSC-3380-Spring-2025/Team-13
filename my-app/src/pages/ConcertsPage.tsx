import { useState } from "react";
import { searchConcerts } from "../api/ticketmasterApi";
import '../styles/ConcertsPage.css';

interface Event {
  id: string;
  name: string;
  dates: {
    start: {
      localDate: string;
      localTime: string;
    };
  };
  _embedded: {
    venues: {
      name: string;
      city: {
        name: string;
      };
    }[];
  };
  url: string;
}

const ConcertPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Event[]>([]);

  const handleSearch = async () => {
    const concerts = await searchConcerts(query);
    setResults(concerts);
  };

  return (
    <div className="concert-container">
    <h2>Find a Concert</h2>
    <div className="concert-search-box">
      <input
        type="text"
        value={query}
        placeholder="Search artist or concert"
        onChange={(e) => setQuery(e.target.value)}
        className="concert-search-box2"
      />
      <button onClick={handleSearch} className='concert-search-button'>Search
      </button>

      <div className="concert-cards-container">
        {results.map((event) => (
          <div key={event.id} className="concert-card">
            <div className="ticket-name">{event.name}</div>
            <div className="ticket-event">
            {event._embedded.venues[0].name}
            <div className="concert-city">({event._embedded.venues[0].city.name})</div>
            </div>
            <div>
              {event.dates.start.localDate}
            </div>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              <button className="tickets-button">Buy Tickets Here!</button>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ConcertPage;