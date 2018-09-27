import { initialState } from './reducer';

const itemKeySelector = (state) => state.get('itemKey', initialState.get('itemKey'));

export { itemKeySelector };
