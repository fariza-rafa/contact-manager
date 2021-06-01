import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT
  } from './types';
  import axios from 'axios';
  
  // Action: get contacts
  export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
  };
  
  // Action: get single contact
  export const getContact = id => async dispatch => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: GET_CONTACT,
      payload: res.data
    });
  };
  
  // Action: add contacts by {contact}
  export const addContact = contact => async dispatch => {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      contact
    );
    dispatch({
      type: ADD_CONTACT,
      payload: res.data
    });
  };
  
  // Action: delete contacts by {id}
  export const deleteContact = id => async dispatch => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (e) {
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    }
  };
  
  // Action: update contact
  export const updateContact = contact => async dispatch => {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${contact.id}`,
      contact
    );
    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data
    });
  };