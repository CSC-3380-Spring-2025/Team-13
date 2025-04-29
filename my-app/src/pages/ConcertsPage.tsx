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
    <div style={{ padding: "20px" }}>
      <h2>Find a Concert</h2>
      <input
        type="text"
        value={query}
        placeholder="Search artist or concert"
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button className='search-box' onClick={handleSearch} style={{ padding: "10px 20px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {results.map((event) => (
          <div key={event.id} style={{ marginBottom: "20px" }}>
            <h3>{event.name}</h3>
            <p>
              {event._embedded.venues[0].name} ({event._embedded.venues[0].city.name})
            </p>
            <p>
              {event.dates.start.localDate} {event.dates.start.localTime}
            </p>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              Buy Tickets Here!
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ConcertPage;