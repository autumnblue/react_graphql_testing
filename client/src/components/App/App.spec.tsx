import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('App component', () => {
  test('renders without crashes', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
