import * as action from '../actions';
import * as select from '../selectors';
import { initialState, homePageReducer } from '../reducer';

describe('Home reducer', () => {
  it('should toggle checklist name', () => {
    const received = homePageReducer(
      initialState,
      action.toggleChecklistName(true),
    );
    expect(select.listNameEditSelector(received)).toBeTruthy();
  });

  describe('manage checklist item', () => {
    let state = initialState;

    it('should add checklist item', () => {
      const testValue = 'test value';
      state = homePageReducer(state, action.addChecklistItem(testValue));

      const items = select
        .itemSelector(state)
        .get('items')
        .toJS();
      const expected = [{ text: testValue }];

      expect(items).toEqual(expected);
    });

    it('should toggle checklist item', () => {
      state = homePageReducer(state, action.toggleChecklistItem(0));
      expect(select.selectedItemSelector(state)).toBe(0);
    });

    it('should update checklist item', () => {
      const newValue = 'new value';
      state = homePageReducer(state, action.updateChecklistItem(0, newValue));

      const items = select
        .itemSelector(state)
        .get('items')
        .toJS();
      const expected = [{ text: newValue }];
      expect(items).toEqual(expected);
    });

    it('should delete checklist item', () => {
      state = homePageReducer(state, action.checkChecklistItem(0));

      const items = select
        .itemSelector(state)
        .get('items')
        .toJS();
      expect(items).toEqual([]);
    });
  });

  describe('should manage checklist', () => {
    let state = initialState;

    it('should add checklist', () => {
      state = homePageReducer(state, action.addChecklist());

      const list = select.listSelector(state).toJS();
      const expected = [
        {
          name: 'new list',
          items: [],
        },
        {
          name: 'new list',
          items: [],
        },
      ];

      expect(list).toEqual(expected);
    });

    it('should select checklist', () => {
      state = homePageReducer(state, action.selectChecklist(1));
      expect(select.selectedListSelector(state)).toBe(1);
    });

    it('should update checklist', () => {
      const newValue = 'new value';
      state = homePageReducer(state, action.updateChecklist(newValue));

      const list = select.listSelector(state).toJS();
      const expected = [
        {
          name: 'new list',
          items: [],
        },
        {
          name: 'new value',
          items: [],
        },
      ];

      expect(list).toEqual(expected);
    });

    it('should delete checklist', () => {
      state = homePageReducer(state, action.deleteChecklist());

      const list = select.listSelector(state).toJS();
      const expected = [
        {
          name: 'new list',
          items: [],
        },
      ];

      expect(list).toEqual(expected);
    });
  });
});
