import * as select from '../selectors';
import { initialState } from '../reducer';

describe('Home selectors', () => {
  it('should get items', () => {
    const received = select.itemSelector(initialState).toJS();
    const expected = {
      name: 'new list',
      items: [],
    };

    expect(received).toEqual(expected);
  });

  it('should get list', () => {
    const received = select.listSelector(initialState).toJS();
    const expected = [
      {
        name: 'new list',
        items: [],
      },
    ];

    expect(received).toEqual(expected);
  });

  it('should get edit list name', () => {
    expect(select.listNameEditSelector(initialState)).toBeFalsy();
  });

  it('should get selected list', () => {
    expect(select.selectedListSelector(initialState)).toBe(0);
  });

  it('should get selected item', () => {
    expect(select.selectedItemSelector(initialState)).toBe(-1);
  });
});
