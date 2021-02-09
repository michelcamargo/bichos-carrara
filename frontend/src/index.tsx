import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';

// var Nedb = require('nedb'), db = new Nedb({filename: '/data/subscribers', autoload: true});


ReactDOM.render(
  <Routes />, 
  document.getElementById('root')
);
