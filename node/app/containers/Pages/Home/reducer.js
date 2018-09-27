import { fromJS } from 'immutable';

import { CHECKLIST_TOGGLE } from './constants';

export const initialState = fromJS({
    itemKey: -1,
});

export const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKLIST_TOGGLE:
      return state.set('itemKey', action.key);
    default:
      return state;
  }
}