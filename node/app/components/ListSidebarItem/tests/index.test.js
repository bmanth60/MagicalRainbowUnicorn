import React from 'react';
import { shallow } from 'enzyme';

import ListSidebarItem from '../index';

/* eslint-disable no-console */

console.error = jest.fn();

describe('<ListSidebarItem />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(<ListSidebarItem onClick={() => {}} text="" selected={false} />);

    expect(console.error).not.toBeCalled();
  });

  it('should have an error on empty', () => {
    console.error.mockClear();

    shallow(<ListSidebarItem />);

    expect(console.error).toBeCalled();
  });

  it('should render selected list sidebar item correctly', () => {
    const testValue = 'test value';
    const wrapper = shallow(
      <ListSidebarItem onClick={() => {}} text={testValue} selected />,
    );

    // Expect selected list item to be rendered
    const sli = wrapper.find('WithStyles(StyledComponent)');
    expect(sli.length).toBe(1);

    // Expect selected list item to contain a list item text
    const lit = sli.find('WithStyles(ListItemText)').prop('primary');
    expect(lit).toBe(testValue);
  });

  it('should render unselected list sidebar item correctly', () => {
    const testValue = 'test value';
    const wrapper = shallow(
      <ListSidebarItem onClick={() => {}} text={testValue} selected={false} />,
    );

    // Expect list item to be rendered
    const li = wrapper.find('WithStyles(ListItem)');
    expect(li.length).toBe(1);

    // Expect selected list item to contain a list item text
    const lit = li.find('WithStyles(ListItemText)').prop('primary');
    expect(lit).toBe(testValue);
  });

  it('should handle unselected list sidebar item click', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <ListSidebarItem onClick={handler} text="" selected={false} />,
    );

    wrapper.find('WithStyles(ListItem)').simulate('Click');
    expect(handler).toBeCalled();
  });
});
