import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT
  } from '../actions/types';
  
  const initialState = {
    contacts: [],
    contact: {}
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      // get contacts from original state
      case GET_CONTACTS:
        return {
          ...state,
          contacts: action.payload
        };
      // get single contact
      case GET_CONTACT:
        return {
          ...state,
          contact: action.payload
        };
      // add contacts through spread operator
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts]
        };
      // update contacts through mapping
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map(
            contact =>
              contact.id === action.payload.id
                ? (contact = action.payload)
                : contact
          )
        };
      // delete contacts through filter
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          )
        };
      default:
        return state;
    }
  };