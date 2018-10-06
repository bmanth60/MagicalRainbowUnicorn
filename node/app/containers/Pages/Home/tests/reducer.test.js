import { initialState, homePageReducer } from '../reducer';

describe('Home reducer', () => {
  it('should return initial state', () => {
    expect(homePageReducer(undefined, {})).toBe(initialState);
  });
});
