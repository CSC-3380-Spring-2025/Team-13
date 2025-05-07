import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreatePost.css';

const CreatePost: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [concert, setConcert] = useState('');
  const [songClip, setSongClip] = useState('');
  const [extraContent, setExtraContent] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('currentUsername');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      username,
      concert,
      songClip,
      extraContent,
      liked: false,
    };

    const existingPosts = JSON.parse(sessionStorage.getItem('posts') || '[]');
    sessionStorage.setItem('posts', JSON.stringify([...existingPosts, newPost]));

    navigate('/feed');
  };

  return (
    <div className="create-post-container">
      <h2>Create a New Post!</h2>
      <form onSubmit={handleSubmit}>
        {username && (
          <p className='post-username'><strong>Posting as: {username}</strong></p>
        )}
        <input
          type="text"
          placeholder="Concert attended"
          value={concert}
          onChange={(e) => setConcert(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="What was your favorite song?"
          value={songClip}
          onChange={(e) => setSongClip(e.target.value)}
          required
        /><br />
        <textarea
          placeholder="Description"
          value={extraContent}
          onChange={(e) => setExtraContent(e.target.value)}
        /><br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
