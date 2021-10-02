import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { store } from './store'
import { Provider } from 'react-redux'
import { Auth0Provider } from "@auth0/auth0-react"
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri="http://localhost:3000/Home"
    >
    <Provider store={store}>
      <Router >
        <App />
      </Router>
    </Provider>
  </Auth0Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
