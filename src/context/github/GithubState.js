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
} from '../types';

const GithubState = props => {
    // Our global state with anything that has to do with github
    const initialState = {
        users:[],
        user:{},
        repos: [],
        loading:false,
    }
    //More actions
    const[state,dispatch]= userReducer(GithubReducer, initialState);

    //Search Users

    //Get User

    //Get Repos

    //Clear Users

    //Set Loading

}
