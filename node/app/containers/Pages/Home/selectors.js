import { createSelector } from 'reselect';

const selectedItemSelector = (state) => state.get('selectedItem');
const listSelector = (state) => state.get('lists');
const selectedListSelector = (state) => state.get('selectedList');
const itemSelector = createSelector(
  selectedListSelector,
  listSelector,
  (id, lists) => { return lists.get(id); }
)

export {
  selectedItemSelector,
  listSelector,
  selectedListSelector,
  itemSelector,
};
