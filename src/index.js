import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjYURs0M1KZJL1M6wVXsid47TKJDIK6uc",
  authDomain: "crudproject-4592e.firebaseapp.com",
  databaseURL: "https://crudproject-4592e.firebaseio.com",
  projectId: "crudproject-4592e",
  storageBucket: "crudproject-4592e.appspot.com",
  messagingSenderId: "1027418145669",
  appId: "1:1027418145669:web:a9aa0c5049f8e4509bbaec",
  measurementId: "G-V26R8MQ35W"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
