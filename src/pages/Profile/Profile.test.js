import React from 'react';
import { shallow, render } from 'enzyme';
import Profile from './Profile';
import ReactDOM from 'react-dom';

describe('testing profile', () => {
let wrapper;
beforeEach(() => { wrapper = shallow(<Profile />); });



it('rendered the title', () => {
    const wrapper = render(<Profile />);
    expect(wrapper.text()).toBe("Pokemon");
  });

});