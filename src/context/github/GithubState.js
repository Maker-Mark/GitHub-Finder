//--> Initial state and our actions, using types
import React {useReducer } from "react";
import axios from 'axios';
import GithubContect from './githubContext';
import GithubReducer from "./githubReducer";
import {
SEARCH_USERS
GET_USER
CLEAR_USERS
GET_REPOS
SET_LOADING
SET_ALERT
REMOVE_ALERT
}
