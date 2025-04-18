import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
        <h2>Impressions Audio</h2>
        <p>Login to your account</p>
        <form>
            <input type="text" placeholder="Username" required>Username</input>
            <input type="password" placeholder="Password" required>Password</input>
            <button type="submit">Login</button>
            <p><a href="#">Forgot Password?</a></p>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
        </form>
    </div>
  );
};

export default LoginPage;
