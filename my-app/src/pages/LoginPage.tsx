import React, { useState } from 'react';
import '../styles/LoginPage.css';

interface LoginPageProps {
  setUser: (name: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    setMessage('');

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Login Successful!") {
          setUser(email);
          setMessage("Login Successful!");
        } else if (data.message === "email and password don't match") {
          setError("Incorrect password");
        } else if (data.message === "User doesn't exist") {
          setError("User not found");
        } else {
          setError("Login failed");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("Login failed.");
      });
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
