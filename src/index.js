import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-b5tc2m0jc1zn.frontegg.com',
  clientId: '14d8d149-4b8d-47a3-afbd-9329da12390d'
};

const authOptions = {
  // keepSessionAlive: true // Uncomment if needed
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true} authOptions={authOptions}>
      <App />
    </FronteggProvider>
  </React.StrictMode>
);

reportWebVitals();


/*
//good old version
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
 */