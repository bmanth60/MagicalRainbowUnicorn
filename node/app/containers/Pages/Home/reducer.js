import { fromJS } from 'immutable';

import {
  CHECKLIST_ITEM_TOGGLE,
  CHECKLIST_ITEM_ADD,
  CHECKLIST_ITEM_CHECK,
  CHECKLIST_ITEM_UPDATE,
  CHECKLIST_UPDATE,
  CHECKLIST_DELETE,
  CHECKLIST_SELECT,
  CHECKLIST_ADD,
  CHECKLIST_NAME_EDIT,
} from './constants';

export const initialState = fromJS({
  editListName: false,
  selectedList: 0,
  selectedItem: -1,
  lists: [
    {
      name: 'new list',
      items: [],
    },
  ],
});

export const homePageReducer = (state = initialState, action) => {
  const empty = initialState.getIn(['lists', 0]);
  let newState = state;
  let selected;
  let lists;
  let items;

  switch (action.type) {
    case CHECKLIST_ITEM_TOGGLE:
      newState = state.set('selectedItem', action.key);
      break;
    case CHECKLIST_ITEM_ADD:
      selected = state.get('selectedList');
      items = state.getIn(['lists', selected, 'items']);

      if (items === undefined) {
        console.error('invalid list key');
        break;
      }

      items = items.push(fromJS({ text: action.text }));
      newState = state.setIn(['lists', selected, 'items'], items);
      break;
    case CHECKLIST_ITEM_CHECK:
      selected = state.get('selectedList');

      if (selected === undefined) {
        console.error('invalid list key');
        break;
      }

      newState = state.deleteIn(['lists', selected, 'items', action.key]);
      break;
    case CHECKLIST_ITEM_UPDATE:
      selected = state.get('selectedList');
      newState = state.setIn(
        ['lists', selected, 'items', action.key, 'text'],
        action.text,
      );
      break;
    case CHECKLIST_SELECT:
      lists = state.getIn(['lists', action.key]);

      if (lists === undefined) {
        console.error('invalid list key');
        break;
      }

      newState = state.set('selectedList', action.key);
      break;
    case CHECKLIST_ADD:
      lists = state.get('lists').push(empty);
      newState = state.set('lists', lists);
      break;
    case CHECKLIST_UPDATE:
      selected = state.get('selectedList');

      if (selected === undefined) {
        console.error('invalid list key');
        break;
      }

      newState = state.setIn(['lists', selected, 'name'], action.name);
      break;
    case CHECKLIST_DELETE:
      selected = state.get('selectedList');

      if (selected === undefined) {
        console.error('invalid list key');
        break;
      }

      lists = state.get('lists').delete(selected);
      if (lists.size === 0) {
        lists = lists.push(empty);
      }

      newState = state.set('lists', lists).set('selectedList', 0);
      break;
    case CHECKLIST_NAME_EDIT:
      newState = state.set('editListName', action.isEditing);
      break;
    default:
      break;
  }

  return newState;
};
