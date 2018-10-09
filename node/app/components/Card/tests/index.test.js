import React from 'react';
import { shallow } from 'enzyme';

import Card from '../index';

/* eslint-disable no-console */

console.error = jest.fn();

describe('<Card />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(<Card>test</Card>).dive();

    expect(console.error).not.toBeCalled();
  });

  it('should have an error on empty', () => {
    console.error.mockClear();

    shallow(<Card />);

    expect(console.error).toBeCalled();
  });

  it('should have children', () => {
    const children = <h1>test</h1>;
    const wrapper = shallow(<Card>{children}</Card>);
    expect(wrapper.contains(children)).toBeTruthy();
  });

  it('should adopt a style attribute', () => {
    const style = { background: 'blue' };
    const wrapper = shallow(<Card style={style}>test</Card>);
    expect(wrapper.prop('style')).toBe(style);
  });

  it('should have an elevation', () => {
    const wrapper = shallow(<Card>test</Card>);
    expect(wrapper.prop('elevation')).toBe(1);
  });
});
