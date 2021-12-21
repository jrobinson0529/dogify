import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import apiConfig from './helpers/apiKeys';
import './styles/index.scss';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(apiConfig);
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
