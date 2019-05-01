import React from 'react';
import Footer from './Footer.js';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Footer /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});


  

