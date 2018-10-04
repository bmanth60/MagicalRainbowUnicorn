import React from 'react';
import { shallow } from 'enzyme';

import Card from '../index';

console.error = jest.fn();

describe('<Card />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(<Card>test</Card>);
    expect(console.error).not.toBeCalled();
  });

  it('should have an error on empty', () => {
    console.error.mockClear();

    shallow(<Card />);
    expect(console.error).toBeCalled();
  });

  it('should have children', () => {
    const children = <h1>test</h1>;
    const renderedComponent = shallow(<Card>{children}</Card>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should adopt a style attribute', () => {
    const style = { background: 'blue' };
    const renderedComponent = shallow(<Card style={style}>test</Card>);
    expect(renderedComponent.prop('style')).toEqual(style);
  });

  it('should have an elevation', () => {
    const renderedComponent = shallow(<Card>test</Card>);
    expect(renderedComponent.prop('elevation')).toEqual(1);
  });
});
