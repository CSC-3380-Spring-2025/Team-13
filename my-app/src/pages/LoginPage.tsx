import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

interface LoginPageProps {
  setUser: (name: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [authing, setAuthing] = useState(false);

  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setUser(data.username);
        localStorage.setItem('currentUsername', data.username);
      } else {
        console.error('User document does not exist');
      }

      setMessage('Login Successful!');
      navigate('/ProfilePage');
    } catch (err: any) {
      console.error('Login error:', err.message);
      if (err.code === 'auth/user-not-found') {
        setError('User not found');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password');
      } else {
        setError('Login failed');
      }
    }
  };

  const signInWithGoogle = async () => {
    setAuthing(true);

    try {
      const response = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = response.user;
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        const username = user.displayName || user.email?.split('@')[0] || 'Anonymous';
        await setDoc(userRef, {
          username: username,
          email: user.email,
        });
      }

      const updatedDoc = await getDoc(userRef);
      if (updatedDoc.exists()) {
        const data = updatedDoc.data();
        setUser(data.username);
        localStorage.setItem('currentUsername', data.username);
      }

      navigate('/ProfilePage');
    } catch (error) {
      console.error(error);
      setAuthing(false);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h5>Login to your IA account!</h5>
        <input
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="password1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </form>        
      <button
        className="google-button"
        onClick={signInWithGoogle}
        disabled={authing}
        style={{ marginTop: '10px' }}
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default LoginPage;