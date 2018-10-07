import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import ListSidebar from '../index';
import { messages } from '../messages';

/* eslint-disable no-console */

console.error = jest.fn();

describe('<ListSidebar />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(
      <ListSidebar
        onAdd={() => {}}
        onSelect={() => {}}
        selected={0}
        items={fromJS([])}
      />,
    );

    expect(console.error).not.toBeCalled();
  });

  it('should have an error on empty', () => {
    console.error.mockClear();

    shallow(<ListSidebar />);

    expect(console.error).toBeCalled();
  });

  it('should render list sidebar item correctly', () => {
    const items = [{ name: 'list 1' }, { name: 'list 2' }, { name: 'list 3' }];
    const wrapper = shallow(
      <ListSidebar
        onAdd={() => {}}
        onSelect={() => {}}
        selected={0}
        items={fromJS(items)}
      />,
    );

    const received = wrapper.find('ListSidebarItem').map(node => node.props());
    const expected = [
      { selected: true, text: 'list 1' },
      { selected: false, text: 'list 2' },
      { selected: false, text: 'list 3' },
    ];
    expect(received).toMatchObject(expected);
  });

  it('should render add list button correctly', () => {
    const handler = () => {};
    const wrapper = shallow(
      <ListSidebar
        onAdd={handler}
        onSelect={() => {}}
        selected={0}
        items={fromJS([])}
      />,
    );

    const li = wrapper.find('WithStyles(ListItem)').props();
    const lit = wrapper.find('WithStyles(ListItemText)').props();
    const received = Object.assign({}, li, lit);
    const expected = { onClick: handler, primary: messages.add.defaultMessage };
    expect(received).toMatchObject(expected);
  });

  it('should handle select list', () => {
    const items = [{ name: 'list 1' }, { name: 'list 2' }];
    const handler = jest.fn();
    const wrapper = shallow(
      <ListSidebar
        onAdd={() => {}}
        onSelect={handler}
        selected={0}
        items={fromJS(items)}
      />,
    );

    wrapper
      .find('ListSidebarItem')
      .last()
      .prop('onClick')();
    expect(handler.mock.calls).toEqual([[1]]);
  });
});
