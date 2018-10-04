import {
  CHECKLIST_ITEM_TOGGLE,
  CHECKLIST_ITEM_ADD,
  CHECKLIST_ITEM_CHECK,
  CHECKLIST_ITEM_UPDATE,
  CHECKLIST_UPDATE,
  CHECKLIST_DELETE,
  CHECKLIST_ADD,
  CHECKLIST_SELECT,
  CHECKLIST_NAME_EDIT,
} from './constants';

export const toggleChecklistName = isEditing => ({
  type: CHECKLIST_NAME_EDIT,
  isEditing,
});

export const toggleChecklistItem = key => ({
  type: CHECKLIST_ITEM_TOGGLE,
  key,
});

export const addChecklistItem = text => ({
  type: CHECKLIST_ITEM_ADD,
  text,
});

export const updateChecklistItem = (key, text) => ({
  type: CHECKLIST_ITEM_UPDATE,
  key,
  text,
});

export const checkChecklistItem = key => ({
  type: CHECKLIST_ITEM_CHECK,
  key,
});

export const selectChecklist = key => ({
  type: CHECKLIST_SELECT,
  key,
});

export const addChecklist = () => ({
  type: CHECKLIST_ADD,
});

export const updateChecklist = name => ({
  type: CHECKLIST_UPDATE,
  name,
});

export const deleteChecklist = () => ({
  type: CHECKLIST_DELETE,
});
