import { createSelector } from 'reselect';

const selectedItemSelector = (state) => state.get('selectedItem');
const selectedListSelector = (state) => state.get('selectedList');
const listNameEditSelector = (state) => state.get('editListName');
const listSelector = (state) => state.get('lists');
const itemSelector = createSelector(
  selectedListSelector,
  listSelector,
  (id, lists) => { return lists.get(id); }
)

export {
  selectedItemSelector,
  selectedListSelector,
  listNameEditSelector,
  listSelector,
  itemSelector,
};
