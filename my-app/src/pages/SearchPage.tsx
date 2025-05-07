import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/SearchPage.css';

interface SearchProps {
  setSelectedTrack: (track: any) => void;
}

const searchTracks = [
  {
    id: "song1",
    name: "Nokia",
    artists: [{ name: "Drake" }],
    album: { images: [{ url: "https://i.redd.it/rget84v49jie1.jpeg" }] }
  },
  {
    id: "song2",
    name: "Stargazing",
    artists: [{ name: "Tervis Scoot" }],
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3" }] }
  },
  {
    id: "song3",
    name: "Street Sweeper",
    artists: [{ name: "Gunna (Ft. Future)" }],
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273e60ecd82c26836900c35714a" }] }
  },
  {
    id: "song4",
    name: "Never Gonna Give You Up",
    artists: [{ name: "Rick Astley" }],
    album: { images: [{ url: "https://makerworld.bblmw.com/makerworld/model/US2ab61bb7d3000c/design/2024-01-30_029b2304056c.png?x-oss-process=image/resize,w_1000/format,webp" }] }
  },
  {
    id: "song5",
    name: "Not Like Us",
    artists: [{ name: "Kendrick Lamar" }],
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad" }] }
  },
  {
    id: "song6",
    name: "Out Of Time",
    artists: [{ name: "The Weeknd" }],
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d" }] }
  },
  {
    id: "song7",
    name: "Psycho CEO",
    artists: [{ name: "Yeat" }],
    album: { images: [{ url: "https://upload.wikimedia.org/wikipedia/en/9/97/Yeat_-_2093.png" }] }
  },
  {
    id: "song8",
    name: "500lbs",
    artists: [{ name: "Lil Tecca" }],
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273c4e6adea69105e6b6e214b96" }] }
  },
  {
    id: "song9",
    name: "EVIL J0RDAN",
    artists: [{ name: "Playboi Carti" }],
    album: { images: [{ url: "https://images.genius.com/d189226c778fabd425194010d8574361.1000x1000x1.png" }] }
  },
  {
    id: "song10",
    name: "Can't Leave Without It",
    artists: [{ name: "21 Savage" }],
    album: { images: [{ url: "https://i1.sndcdn.com/artworks-3BcPD7boRmWW-0-t500x500.jpg" }] }
  },
];

const YOUTUBE_API_KEY = "AIzaSyAO5UY1Iz3Se1c83YFQZ9u4Plot8Yuur8c";

export default function SearchPage({ setSelectedTrack }: SearchProps) {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState<any[]>(searchTracks);
  const navigate = useNavigate();

  const searchSongs = async () => {
    if (!query.trim()) return;

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: query,
          key: YOUTUBE_API_KEY,
          type: 'video'
        }
      });

      const youtubeTracks = response.data.items.map((item: any) => ({
        id: item.id.videoId,
        name: item.snippet.title,
        artists: [{ name: item.snippet.channelTitle }],
        album: { images: [{ url: item.snippet.thumbnails.default.url }] }
      }));

      setTracks(youtubeTracks);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
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
      </div>
      <div className="song-cards-container">
        {tracks.map((track: any) => (
          <div
            key={track.id}
            className="song-card"
            onClick={() => navigate(`/player/${track.id}`)}
          >
            <div className="song-card-left">
              <img
                src={track.album.images[0]?.url || ""}
                alt={track.name}
                className="song-image"
              />
              <div className="song-info">
                <p className="song-title">{track.name}</p>
                <p className="song-artist">{track.artists[0]?.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}