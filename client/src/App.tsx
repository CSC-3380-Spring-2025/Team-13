import React, { useState } from 'react';
import './App.css';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';

function App() {
  const [user, setUser] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(true); 

  return (
    <div className="App">
  

      {user ? (
        <>
          <p>Welcome, {user}!</p>
          <button onClick={() => setUser(null)}>Log out</button>
        </>
      ) : (
        <>
          {showLogin ? (
            <>
              <Login setUser={setUser} />
              <p>
                Don't have an account?{" "}
                <button onClick={() => setShowLogin(false)}>Sign up</button>
              </p>
            </>
          ) : (
            <>
              <Signup />
              <p>
                Already have an account?{" "}
                <button onClick={() => setShowLogin(true)}>Login</button>
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;