import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import SideBar from './components/Navigation/Navigation';
import Presentation from './components/Presentation/Presentation';





render((
  <BrowserRouter>
    <SideBar  />
    <Presentation username={"test"}/>
  </BrowserRouter>
), document.getElementById('root'));
