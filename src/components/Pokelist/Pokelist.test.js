import React from 'react';
import { shallow, mount, render } from 'enzyme';
import  Pokelist from './Pokelist';
import ReactDOM from 'react-dom';


describe('testing Pokelist component', ()=> {
let wrapper, name, url;
beforeEach(() => {
  wrapper= shallow(<Pokelist />); });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pokelist />, div);
});


