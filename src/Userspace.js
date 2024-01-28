import React from 'react';
import './App.css';

const UserSpace = ({ user }) => {
  return (
    <div className="common-background">
      <div className="content-container">
        <h2>User Space</h2>
        <p>Welcome, {user ? user.name : 'Guest'}! This is your personal space in our website.</p>
      </div>
    </div>
  );
};

export default UserSpace;



/* import React from 'react';
import './App.css';

const UserSpace = () => {
  return (
    <div className="common-background">
      <div className="content-container">
        <h2>User Space</h2>
        <p>This is your personal space in our website.</p>
      </div>
    </div>
  );
};

export default UserSpace;
 */