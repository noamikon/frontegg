import React from 'react';
import feTestBg from './fe-test-bg.png';

const Home = () => {
  return (
    <div className="home-bg" style={{ backgroundImage: `url(${feTestBg})` }}>
        <div className="hp-content-container">
            <h2>Home Page</h2>
        </div>
    </div>
  );
};

export default Home;


/*
// refactored version
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import feTestBg from './fe-test-bg.png';
import './App.css';

const Home = ({ onLogin, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username === "user" && password === "pass") {
      setError('');
      onLogin(username);
      navigate('/userspace');
    } else {
      setError('Login has failed. Please check your username and password.');
    }
  };

  return (
    <div className="home-bg" style={{ backgroundImage: `url(${feTestBg})` }}>
      {!isAuthenticated && (
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            </div>
            <div>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>
            <button type="submit">Log In</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Home; */



/* import React from 'react';
import feTestBg from './fe-test-bg.png';

const Home = () => {
  return (
    <div className="home-bg" style={{ backgroundImage: `url(${feTestBg})` }}>
        <div className="hp-content-container">
            <h2>Home Page</h2>
        </div>
    </div>
  );
};

export default Home;
 */