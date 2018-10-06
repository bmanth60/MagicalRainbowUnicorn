import React from 'react';
import { shallow } from 'enzyme';

import ListHeader from '../index';

console.error = jest.fn();

describe('<ListHeader />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(
      <ListHeader
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        editing={false}
        message=""
      />,
    );

    expect(console.error).not.toBeCalled();
  });

  it('should have an error on empty', () => {
    console.error.mockClear();

    shallow(<ListHeader />);

    expect(console.error).toBeCalled();
  });

  it('should handle delete', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <ListHeader
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={handler}
        editing={false}
        message=""
      />,
    );

    wrapper.find('WithStyles(IconButton)').simulate('Click');
    expect(handler).toBeCalled();
  });

  it('should render list item content correctly', () => {
    const testValue = 'TestValue';
    const wrapper = shallow(
      <ListHeader
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        message={testValue}
        editing
      />,
    );

    const received = wrapper.find('ListItemContent').map(node => node.props());
    const expected = [
      {
        editable: true,
        text: testValue,
      },
    ];

    expect(received).toMatchObject(expected);
  });

  it('should pass a toggle handler to list item content', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <ListHeader
        onToggle={handler}
        onEdit={() => {}}
        onDelete={() => {}}
        editing={false}
        message=""
      />,
    );

    const li = wrapper.find('ListItemContent');

    // Call click
    li.prop('onClick')();

    // Call blur
    li.prop('onBlur')();

    expect(handler.mock.calls).toEqual([[true], [false]]);
  });

  it('should pass an edit handler to list item content', () => {
    const testValue = 'TestValue';
    const handler = jest.fn();
    const wrapper = shallow(
      <ListHeader
        onToggle={() => {}}
        onEdit={handler}
        onDelete={() => {}}
        editing={false}
        message=""
      />,
    );

    const li = wrapper.find('ListItemContent');

    li.prop('onChange')({ target: { value: testValue } });

    expect(handler.mock.calls).toEqual([[testValue]]);
  });
});
