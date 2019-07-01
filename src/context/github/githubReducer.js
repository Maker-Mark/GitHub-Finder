import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    } from '../types';
//What is going to happen to your state based on your action

export default (state, action) => {
    switch (action.type) {
      case SEARCH_USERS:
        return {
          ...state,
          users: action.payload,
          loading: false
        };
        default:
     return state;
    }
 };