import React from 'react';
import { shallow } from 'enzyme';

import styled from '../index';

describe('styled hoc', () => {
  it('should wrap a component with styled theme', () => {
    const Test = styled('div')(theme => ({
      color: theme.palette.primary.main,
    }));

    const wrapper = shallow(<Test className="test-class" testProp="test" />);
    const received = wrapper.props();

    const expected = {
      className: 'test-class',
      classes: {
        root: 'StyledComponent-root-1',
      },
      testProp: 'test',
    };
    expect(received).toEqual(expected);
  });

  it('should wrap a component with style', () => {
    const Test = styled('div')({
      color: 'white',
    });

    const wrapper = shallow(<Test className="test-class" testProp="test" />);
    const received = wrapper.props();
    const expected = {
      className: 'test-class',
      classes: {
        root: 'StyledComponent-root-2',
      },
      testProp: 'test',
    };

    expect(received).toEqual(expected);
  });

  it('should render component with style', () => {
    const Test = styled('div')({
      color: 'white',
    });

    const wrapper = shallow(
      <Test className="test-class" data-tag="test" />,
    ).dive();
    const received = wrapper.html();
    const expected = '<div class="StyledComponent-root-3 test-class" data-tag="test"></div>';

    expect(received).toEqual(expected);
  });
});
