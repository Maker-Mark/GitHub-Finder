import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';
//--> Initial state and our ACTIONS, using types

//function that holds our global state...Similar to what we'd have in the App js
const AlertState = props => {
  // Our global state with anything that has to do with github
  const initialState = null; // It's just one property/state, so just set it to null

  //To dispatch back, we use the reducer!
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Put the alert into the state
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  //Value is something that we want to make available to our entire map
  //We add the things we want to make available given the state using context.
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
      {/* We wrap our entire app with this provider */}
    </AlertContext.Provider>
  );
};

export default AlertState;
