import React from 'react';
import { shallow } from 'enzyme';

import ListItem from '../index';

console.error = jest.fn();

describe('<ListItem />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(
      <ListItem
        onClick={() => {}}
        onBlur={() => {}}
        onChange={() => {}}
        onCheck={() => {}}
        editable={false}
        text=""
      />,
    );

    expect(console.error).not.toBeCalled();
  });

  it('should have an error on empty', () => {
    console.error.mockClear();

    shallow(<ListItem />);

    expect(console.error).toBeCalled();
  });

  it('should render list item content props correctly', () => {
    const emptyHandler = () => {};
    const testValue = 'TestValue';
    const wrapper = shallow(
      <ListItem
        onClick={emptyHandler}
        onBlur={emptyHandler}
        onChange={emptyHandler}
        onCheck={emptyHandler}
        text={testValue}
        editable
      />,
    );

    const received = wrapper.find('ListItemContent').map(node => node.props());
    const expected = [
      {
        onClick: emptyHandler,
        onBlur: emptyHandler,
        onChange: emptyHandler,
        editable: true,
        text: testValue,
      },
    ];

    expect(received).toMatchObject(expected);
  });

  it('should keep checkbox unchecked', () => {
    const wrapper = shallow(
      <ListItem
        onClick={() => {}}
        onBlur={() => {}}
        onChange={() => {}}
        onCheck={() => {}}
        editable={false}
        text=""
      />,
    );

    const checked = wrapper.find('WithStyles(Checkbox)').prop('checked');
    expect(checked).toBeFalsy();
  });

  it('should handle check', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <ListItem
        onClick={() => {}}
        onBlur={() => {}}
        onChange={() => {}}
        onCheck={handler}
        editable={false}
        text=""
      />,
    );

    wrapper.find('WithStyles(Checkbox)').simulate('Change');
    expect(handler).toBeCalled();
  });
});
