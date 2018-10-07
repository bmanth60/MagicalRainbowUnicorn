import React from 'react';
import { shallow } from 'enzyme';

import ListItemContent from '../index';

/* eslint-disable no-console */

console.error = jest.fn();

describe('<ListItemContent />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(
      <ListItemContent
        onClick={() => {}}
        onBlur={() => {}}
        onChange={() => {}}
        editable={false}
      />,
    );

    expect(console.error).not.toBeCalled();
  });

  it('should have an error on empty', () => {
    console.error.mockClear();

    shallow(<ListItemContent />);

    expect(console.error).toBeCalled();
  });

  it('should render typography correctly', () => {
    const emptyHandler = () => {};
    const testValue = 'TestValue';
    const tp = { style: { fontSize: '1rem' } };
    const wrapper = shallow(
      <ListItemContent
        onClick={emptyHandler}
        onBlur={emptyHandler}
        onChange={emptyHandler}
        editable={false}
        text={testValue}
        typographyProps={tp}
      />,
    );

    const received = wrapper.props();
    const expected = Object.assign({}, tp, { onClick: emptyHandler });

    expect(wrapper.name()).toBe('WithStyles(Typography)');
    expect(received).toMatchObject(expected);
    expect(wrapper.contains(testValue)).toBeTruthy();
  });

  it('should render textfield correctly', () => {
    const emptyHandler = () => {};
    const testValue = 'TestValue';
    const wrapper = shallow(
      <ListItemContent
        onClick={emptyHandler}
        onBlur={emptyHandler}
        onChange={emptyHandler}
        text={testValue}
        editable
      />,
    );

    const received = wrapper.props();
    const expected = {
      onChange: emptyHandler,
      onBlur: emptyHandler,
      value: testValue,
      autoFocus: true,
      fullWidth: true,
    };

    expect(wrapper.name()).toBe('TextField');
    expect(received).toMatchObject(expected);
  });

  it('should handle keypress', () => {
    const e = { key: 'Enter', target: { value: 'test' } };
    const handler = jest.fn();
    const wrapper = shallow(
      <ListItemContent
        onClick={() => {}}
        onBlur={handler}
        onChange={() => {}}
        text=""
        editable
      />,
    );

    wrapper.prop('onKeyPress')(e);
    expect(handler.mock.calls).toEqual([[e]]);
  });
});
