import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});


