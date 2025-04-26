import React, { useState } from 'react';

const Login = ({ setUser }: { setUser: (name: string) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error, setError] = useState('');
  const [message, setMessage]= useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError(' ');
    setMessage(' ');

    const data = {
      email: email,
      password: password
    };

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ email, password})
    })


  .then((res) => res.json())
  .then((data) => {

  if (data.message === "Login Successful!") {
    setUser(email);
    setMessage("Login Successful!")

    
  } else if (data.message === "email and password don't match") {
    setError("Incorrect password");
    setMessage('');
  } else if (data.message === "User doesn't exist") {
    setError("User not found");
    setMessage('');
  } else {
    setError("login failed");
    setMessage('');
  }
}) 

.catch((error) => {
  console.error("Login error:", error);
  setError("Login failed.");
  setMessage('');
});
  };



  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button type="submit">Login</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}




    </form>
  );
};

export default Login;


