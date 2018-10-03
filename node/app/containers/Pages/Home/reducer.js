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
} from './constants';

export const initialState = fromJS({
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
    selectedList: 0,
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
      lists = state.get('lists');
      list = lists.get(selected);

      if (list == undefined) {
        console.error('invalid list key');
        break;
      }

      //TODO - Brian 20181002 - Fix items with immutable
      list.items.push({ text: action.text });
      state.set('lists', lists);

      break;
    case CHECKLIST_ITEM_UPDATE:
      selected = state.get('selectedList');
      lists = state.get('lists');
      list = lists.setIn([selected, 'items', action.key, 'text'], action.text);

      newState = state.set('lists', list);

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
      lists = state.get('lists');
      lists = lists.push(fromJS(empty));
      newState = state.set('lists', lists);

      break;
    case CHECKLIST_UPDATE:
      selected = state.get('selectedList');
      lists = state.get('lists');
      list = lists.get(selected);

      if (list == undefined) {
        console.error('invalid list key');
        break;
      }

      list.name = action.name;
      newState = state.set('lists', lists);

      break;
    case CHECKLIST_DELETE:
      lists = state.get('lists');

      if (lists.get(action.key) == undefined ) {
        console.error('invalid list key');
        break;
      }

      newState = state.set('lists', lists.delete(action.key));

      break;
  }

  return newState;
}
