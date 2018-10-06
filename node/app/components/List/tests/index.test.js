import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import List from '../index';

console.error = jest.fn();

describe('<List />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(
      <List
        onAdd={() => {}}
        onToggle={() => {}}
        onEdit={() => {}}
        onCheck={() => {}}
        items={fromJS([])}
        editId={-1}
      />,
    );

    expect(console.error).not.toBeCalled();
  });

  it('should have an error on empty', () => {
    console.error.mockClear();

    shallow(<List />);

    expect(console.error).toBeCalled();
  });

  it('should render the correct number of items', () => {
    const emptyHandler = () => {};
    const items = fromJS([
      { text: 'item 1' },
      { text: 'item 2' },
      { text: 'item 3' },
    ]);
    const wrapper = shallow(
      <List
        onAdd={emptyHandler}
        onToggle={emptyHandler}
        onEdit={emptyHandler}
        onCheck={emptyHandler}
        items={items}
        editId={0}
      />,
    );

    const received = wrapper.find('ListItem').map(node => node.props());
    const expected = [
      {
        editable: true,
        text: 'item 1'
      },
      {
        editable: false,
        text: 'item 2'
      },
      {
        editable: false,
        text: 'item 3'
      },
    ];

    expect(received).toMatchObject(expected);
  });

  it('should handle add', () => {
    const testValue = 'TestValue';
    const addHandler = jest.fn();
    const wrapper = shallow(
      <List
        onAdd={addHandler}
        onToggle={() => {}}
        onEdit={() => {}}
        onCheck={() => {}}
        items={fromJS([])}
        editId={-1}
      />,
    );

    wrapper
      .find('TextField')
      .simulate('KeyPress', { key: 'Enter', target: { value: testValue } });

    expect(addHandler.mock.calls).toEqual([[testValue]]);
  });

  it('should pass a toggle handler to list item', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <List
        onAdd={() => {}}
        onToggle={handler}
        onEdit={() => {}}
        onCheck={() => {}}
        items={fromJS([{ text: 'item 1' }])}
        editId={-1}
      />,
    );

    const li = wrapper.find('ListItem');

    // Call click
    li.prop('onClick')();

    // Call blur
    li.prop('onBlur')();

    expect(handler.mock.calls).toEqual([[0],[-1]]);
  });

  it('should pass an edit handler to list item', () => {
    const testValue = 'TestValue';
    const handler = jest.fn();
    const wrapper = shallow(
      <List
        onAdd={() => {}}
        onToggle={() => {}}
        onEdit={handler}
        onCheck={() => {}}
        items={fromJS([{ text: 'item 1' }])}
        editId={-1}
      />,
    );

    const li = wrapper.find('ListItem');

    li.prop('onChange')({target: {value: testValue}});

    expect(handler.mock.calls).toEqual([[0, testValue]]);
  });

  it('should pass a check handler to list item', () => {
    const testValue = 'TestValue';
    const handler = jest.fn();
    const wrapper = shallow(
      <List
        onAdd={() => {}}
        onToggle={() => {}}
        onEdit={() => {}}
        onCheck={handler}
        items={fromJS([{ text: 'item 1' }])}
        editId={-1}
      />,
    );

    const li = wrapper.find('ListItem');

    li.prop('onCheck')();

    expect(handler.mock.calls).toEqual([[0]]);
  });
});
