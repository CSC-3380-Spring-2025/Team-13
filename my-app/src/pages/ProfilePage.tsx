import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

interface Post {
  id: number;
  username: string;
  concert: string;
  songClip: string;
  extraContent?: string;
  liked: boolean;
}

interface ProfilePageProps {
  user: string | null;
  setUser: (user: string | null) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [followers, setFollowers] = useState<number>(0);

  useEffect(() => {
    if (!user) {
      navigate('/LoginPage');
    } else {
      const storedPosts = JSON.parse(sessionStorage.getItem('posts') || '[]');
      const userPosts = storedPosts.filter((post: Post) => post.username === user);
      setPosts(userPosts);
      setFollowers(0);
    }
  }, [user, navigate]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUsername');
    navigate('/LoginPage');
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src="https://ih1.redbubble.net/image.1046392278.3346/raf,360x360,075,t,fafafa:ca443f4786.jpg" 
          // Dummy profile picture...in further development we will implement a feature to change your pfp
          alt="Profile"
          className="profile-pic"
        />
        <h2>{user}</h2>
        <div className="profile-stats">
          <div>
            <h4>{followers}</h4>
            <p>Followers</p>
          </div>
          <div>
            <h4>{posts.length}</h4>
            <p>Posts</p>
          </div>
        </div>
        <button className="logoutbutton-profile" onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className="profile-posts">
        <h3>Your Posts</h3>
        {posts.length === 0 ? (
          <p className='no-posts'>No posts</p>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="post-card" onClick={() => navigate('/Feed')}>
                <h4>{post.concert}</h4>
                <p><em>Favorite Song:</em> {post.songClip}</p>
                {post.extraContent && <p>"{post.extraContent}"</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
