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
