import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import SideBar from './components/Navigation/Navigation';
import Router from './Router'





render((
  <BrowserRouter>
    <Router />
    <SideBar  />
  </BrowserRouter>
), document.getElementById('root'));
