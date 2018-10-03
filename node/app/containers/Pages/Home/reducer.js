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
      name: 'list 0',
      items: [
        {
          text: 'Lorem ipsum',
        }
      ],
    },
  ],
});

export const homePageReducer = (state = initialState, action) => {
  const empty = {name: 'new list', items:[]};
  let newState = state, selected, lists, list, item;

  switch (action.type) {
    case CHECKLIST_ITEM_TOGGLE:
      newState = state.set('selectedItem', action.key);
      break;

    case CHECKLIST_ITEM_ADD:
      selected = state.get('selectedList');
      list = state.getIn(['lists', selected, 'items']);

      if (list == undefined) {
        console.error('invalid list key');
        break;
      }

      //TODO - Brian 20181002 - Fix items with immutable
      const result = list.push(fromJS({ text: action.text }));
      console.log(result);
      state.set('lists', lists);

      break;
    case CHECKLIST_ITEM_UPDATE:
      selected = state.get('selectedList');
      newState = state.setIn(['lists', selected, 'items', action.key, 'text'], action.text);
      break;
    case CHECKLIST_SELECT:
      lists = state.getIn(['lists', action.key]);

      if (lists == undefined ) {
        console.error('invalid list key');
        break;
      }

      newState = state.set('selectedList', action.key);

      break;
    case CHECKLIST_ADD:
      newState = state.get('lists').push(fromJS(empty));
      break;
    case CHECKLIST_UPDATE:
      selected = state.get('selectedList');
      newState = state.setIn(['lists', selected, 'name'], action.name);
      break;
    case CHECKLIST_DELETE:
      newState = sstate.deleteIn(['lists', action.key]);
      break;
    case CHECKLIST_NAME_EDIT:
      newState = state.set('editListName', action.isEditing)
      break;
  }

  return newState;
}
