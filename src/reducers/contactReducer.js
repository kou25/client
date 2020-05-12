import {
    GET_CONTACTS,
    DELETE_CONTACT,
    ADD_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    LOADING
  } from '../actions/types';
  
  const initialState = {
    contacts: [],
    contact: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CONTACTS:
        return {
          ...state,
          contacts: action.payload,
          loading: false
        };
      case GET_CONTACT:
        return {
          ...state,
          contact: action.payload,
          loading: false
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          ),
          loading: false
        };
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
          loading: false
        };
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map(
            contact =>
              contact.id === action.payload.id
                ? (contact = action.payload)
                : contact
          ),
          loading: false
        };
        case LOADING:
          return {
              ...state,
              loading: true
              };  
      default:
        return state;
    }
  }
  