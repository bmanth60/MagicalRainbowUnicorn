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

export const toggleChecklistName = (isEditing) => {
  return {
    type: CHECKLIST_NAME_EDIT,
    isEditing: isEditing,
  }
}

export const toggleChecklistItem = (key) => {
  return {
    type: CHECKLIST_ITEM_TOGGLE,
    key: key,
  };
}

export const addChecklistItem = (text) => {
  return {
    type: CHECKLIST_ITEM_ADD,
    text: text,
  };
}

export const updateChecklistItem = (key, text) => {
  return {
    type: CHECKLIST_ITEM_UPDATE,
    key: key,
    text: text,
  };
}

export const checkChecklistItem = (key) => {
  return {
    type: CHECKLIST_ITEM_CHECK,
    key: key,
  };
}

export const selectChecklist = (key) => {
  return {
    type: CHECKLIST_SELECT,
    key: key,
  };
}

export const addChecklist = () => {
  return {
    type: CHECKLIST_ADD,
  };
}

export const updateChecklist = (name) => {
  return {
    type: CHECKLIST_UPDATE,
    name: name,
  };
}

export const deleteChecklist = () => {
  return {
    type: CHECKLIST_DELETE,
  };
}
