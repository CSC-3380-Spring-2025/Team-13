import { useParams } from 'react-router-dom';
import '../styles/SongPlayer.css';

export default function PlayerPage() {
  const { id } = useParams();

  return (
    <div className='songplayer-container'>
      <h1>Now Playing</h1>
      <div>
        <iframe
          width="1366"
          height="768"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
