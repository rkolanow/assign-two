import React from 'react';
import { configure, shallow, mount, render  } from 'enzyme';
import Pokecard from './Pokecard';
import ReactDOM from 'react-dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pokecard />, div);
});
