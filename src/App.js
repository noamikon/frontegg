import React, { useEffect, useState } from 'react';
import { 
  useAuth,
  useAuthActions,
  ContextHolder,
  AdminPortal,
  useLoginWithRedirect
} from "@frontegg/react";
import { fetchTenantNames } from './fronteggService'; // Import the function
import settingsIcon from './settings.png';
import logoutIcon from './logout.png';
import './App.css';

function App() {
  const { user, isAuthenticated } = useAuth();
  const { switchTenant } = useAuthActions();
  const loginWithRedirect = useLoginWithRedirect();
  const [tenantNames, setTenantNames] = useState({});
  const [selectedTenant, setSelectedTenant] = useState('');

  const handleClick = () => {
    AdminPortal.show();
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchTenantNames(user?.tenantIds || [])
        .then(names => setTenantNames(names))
        .catch(error => console.error('Failed to fetch tenant names:', error));
    } else {
      loginWithRedirect();
    }
  }, [isAuthenticated, user?.tenantIds, loginWithRedirect]);

  const handleSwitchTenant = (tenantId) => {
    switchTenant({ tenantId });
    setSelectedTenant(tenantId);
  };

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <div className="menu">
            <button onClick={handleClick}>
              <img src={settingsIcon} alt="Settings" />
              Settings
            </button>
            <button onClick={logout}>
              <img src={logoutIcon} alt="Logout" />
              Logout
            </button>
            <select 
              value={selectedTenant} 
              onChange={(e) => {
                setSelectedTenant(e.target.value);
                handleSwitchTenant(e.target.value);
              }}
            >
              {user?.tenantIds?.map((tenantId) => (
                <option key={tenantId} value={tenantId}>
                  {tenantNames[tenantId] || `Tenant ${tenantId}`}
                </option>
              ))}
            </select>
          </div>
          <div className="top-bar">
            <div className="profile-info">
              {user?.profilePictureUrl && <img src={user.profilePictureUrl} alt={user.name} />}
              <span>{user?.name}</span>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
