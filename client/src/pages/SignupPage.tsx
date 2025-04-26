import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setMessage('');
      return;
    }

    const Data = {
      email: email,
      password: password,
    };
    fetch("http://localhost:3001/signup", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password})

    
    })
      .then((res) => {
        if (res.status === 200) {
          setMessage("Signup Successful! Please Login");
          setError("");
        } else if (res.status === 409) {
          setError("Email already registered");
          setMessage("");
        } else {
          setError("Signup failed");
          setMessage("");
        }
      })
      .catch((error) => {
        console.error("Signup failed:", error);
        setError("Signup failed");
        setMessage("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an Account</h2>

      <label htmlFor="email">Email:</label><br />
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <label htmlFor="password">Password:</label><br />
      <input
        id="password"
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <label htmlFor="confirmPassword">Confirm Password:</label><br />
      <input
        id="confirmPassword"
        type="password"
        placeholder="Repeat your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      /><br />

      <button type="submit">Sign Up</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </form>
  );
};

export default Signup;
