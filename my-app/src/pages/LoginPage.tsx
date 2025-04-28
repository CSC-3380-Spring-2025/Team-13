import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/LoginPage.css';

interface LoginPageProps {
  setUser: (name: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Holds the users email so it can't be reused
      setUser(email);
      setMessage('Login Successful!');
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

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h5>Login to your account!</h5>
        <input
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="password1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Login</button>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
