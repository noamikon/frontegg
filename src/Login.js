import React from 'react';
import { useAuthActions } from '@frontegg/react';
import './App.css';

const Login = () => {
  const { loginWithRedirect } = useAuthActions();

  return (
    <div className="common-background">
      <div className="content-container">
        <div className="login-container">
          <button onClick={() => loginWithRedirect()} className="login-button">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;


/*
//before embedded login
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Here you would check the credentials against a user management system.
    // This is just a placeholder for the actual login logic.
    if (username === "user" && password === "pass") {
      // Reset error
      setError('');
      // Redirect to user-space page on successful login
      navigate('/Userspace');
    } else {
      // Set error message
      setError('Login has failed. Please check your username and password.');
    }
  };

  return (
    <div className="common-background">
      <div className="content-container">
      <div className="login-container">
      // <div className="content-container"> 
        <form onSubmit={handleSubmit} className="login-form">
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Log In</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
*/
