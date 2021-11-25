import { CREATE_CONTACT,DELETE_CONTACT,GET_CONTACT, UPDATE_CONTACT ,SELECT_CONTACT,CLEAR_CONTACT, DELETE_SELECTED_CONTACTS} from "../constant/type";


// actions
export const addContact = (contact) => {
    return {
      type:CREATE_CONTACT,
      payload:contact,
    };
  }
  

  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id,
  })
  

  // update a contact

  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
  })
  

  // delete a contact

  export const deleteContact = (id) => ({
    type:DELETE_CONTACT,
    payload:id
  })


  export const SelectAllContact = (id) => ({
    type:SELECT_CONTACT,
    payload:id
  })

  /// 
  export const clearALLContact = () => ({
    type: CLEAR_CONTACT,
  })
  

   /// 
   export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACTS,
  });
  