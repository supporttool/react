// import React from 'react';
import ReactDOM from 'react-dom';
import './finservportal.css';
import Loginportal from './Loginportal';
import App from './App';
import Menu from './Menu';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

