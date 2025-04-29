import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Feed.css';

interface Post {
  id: number;
  username: string;
  concert: string;
  songClip: string;
  extraContent?: string;
  liked: boolean;
}

const Feed: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const defaultPosts: Post[] = [
      {
        id: 1,
        username: 'musiclover01',
        concert: 'Taylor Swift - Eras Tour',
        songClip: 'https://open.spotify.com/track/5snyhxAh2z5BKyJxY0k9jd',
        extraContent: "Best night of my life!",
        liked: false,
      },
      {
        id: 2,
        username: 'concertcrazy22',
        concert: 'Drake - It’s All A Blur Tour',
        songClip: 'https://open.spotify.com/track/6zSpb8dQRaw0M1dK8PBwQz',
        extraContent: "Front row seats 🤯",
        liked: false,
      },
    ];

    const storedPosts = JSON.parse(sessionStorage.getItem('posts') || '[]');

    if (storedPosts.length > 0) {
      setPosts(storedPosts);
    } else {
      setPosts(defaultPosts);
      sessionStorage.setItem('posts', JSON.stringify(defaultPosts));
    }
  }, []);

  const toggleLike = (id: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, liked: !post.liked } : post
    );
    setPosts(updatedPosts);
    sessionStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    sessionStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="feed-container">
      <button className="create-post-button" onClick={() => navigate('/create')}>
        <h4>Create New Post</h4>
      </button>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>@{post.username}</h3>
          <p>Concert Attended: <strong>{post.concert}</strong></p>
          <p>Favorite Song Performed:</p>
          <p>{post.songClip}</p>
          {post.extraContent && <p>"{post.extraContent}"</p>}
          <div className="post-actions">
            <button
              className={`like-button ${post.liked ? 'liked' : ''}`}
              onClick={() => toggleLike(post.id)}
            >
              {post.liked ? 'Liked' : 'Like'}
            </button>
            <button
              className="delete-button"
              onClick={() => deletePost(post.id)}
            >
            Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
