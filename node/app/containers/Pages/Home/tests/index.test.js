import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../index';
import { initialState } from '../reducer';

/* eslint-disable no-console */

console.error = jest.fn();

describe('<Home />', () => {
  it('should render without error', () => {
    console.error.mockClear();

    shallow(
      <Home
        selectedItem={-1}
        selectedList={0}
        listNameEdit={false}
        lists={initialState.get('lists')}
        item={initialState.getIn(['lists', 0])}
        toggleChecklistItem={() => {}}
        toggleChecklistName={() => {}}
        checkChecklistItem={() => {}}
        addChecklistItem={() => {}}
        updateChecklistItem={() => {}}
        addChecklist={() => {}}
        deleteChecklist={() => {}}
        updateChecklist={() => {}}
        selectChecklist={() => {}}
      />,
    );

    expect(console.error).not.toBeCalled();
  });
});
