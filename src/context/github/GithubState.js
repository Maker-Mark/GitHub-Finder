import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING
} from '../types';
//--> Initial state and our ACTIONS, using types

//function that holds our global state...Similar to what we'd have in the App js

let githubClientId, githubClientSecret;
if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = props => {
  // Our global state with anything that has to do with github
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  //To dipatch back, we use the reducer!
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  //Pull state from Search component
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    console.log(res.data.items);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
    //Dispatches the types seach users with the payload of the data of the result.
  };

  //Get a single github user
  const getUser = async login => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get  users' repos
  const getUserRepos = async login => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  //Clear users on page
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    });
  //Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING
    });

  //Value is somthing that we want to make available to our entire map
  //We add the things we want to make available given the state using context.
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {' '}
      {props.children} {/* We wrap our entire app with this provider */}{' '}
    </GithubContext.Provider>
  );
};

export default GithubState;
