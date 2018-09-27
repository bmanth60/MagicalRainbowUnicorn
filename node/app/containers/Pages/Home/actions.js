import { CHECKLIST_TOGGLE } from './constants';

export function toggleChecklist(key) {
  return {
    type: CHECKLIST_TOGGLE,
    key: key,
  };
}
