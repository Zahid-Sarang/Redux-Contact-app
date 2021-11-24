import { CREATE_CONTACT } from "../constant/type";

// actions
export const addContact = (contact) => {
    return {
      type:CREATE_CONTACT,
      payload:contact,
    };
  }
  