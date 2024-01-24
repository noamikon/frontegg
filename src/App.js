import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import Login from './Login';
import UserSpace from './Userspace';
import logo from './logo.svg';
import './App.css';

function App() {
  const { isAuthenticated, user } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Automatically redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
            <li><Link to="/login/">Log-In</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/userspace/" element={<UserSpace />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
