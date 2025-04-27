import { useState } from "react";
import axios from "axios";
import '../styles/SearchPage.css';

interface SearchProps {
  setSelectedTrack: (track: any) => void;
}

export default function SearchPage({ setSelectedTrack }: SearchProps) {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState<any[]>([]);

  const searchSongs = async () => {
    const response = await axios.get(`http://localhost:8000/search?query=${query}`);
    setTracks(response.data.tracks);
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search your favorite songs here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-box2"
        />
        <button onClick={searchSongs} className="search-button">Search</button>

        <div>
          {tracks.map((track: any) => (
            <div
              key={track.id}
              className="song-card"
              onClick={() => setSelectedTrack(track)}
              style={{ cursor: "pointer" }}
            >
              <img src={track.album.images[0].url} alt={track.name} width="50" />
              <p>{track.name} - {track.artists[0].name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
