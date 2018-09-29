import { CHECKLIST_TOGGLE } from './constants';

export const toggleChecklist = (key) => {
  return {
    type: CHECKLIST_TOGGLE,
    key: key,
  };
}
