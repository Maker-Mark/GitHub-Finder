import React, {Fragment, useState} from 'react';
import GithubState from './context/github/GithubState';
import './App.css'; //Global css, renders on all pages and all components
import Navbar from './components/layouts/Navbar';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About';
import Users from './components/users/Users';
import User from './components/users/User';

//Once the app mounts lets get the response from the api using async await
const App = () => {
//To bring state into our app lets

const [users,setUsers] = useState([]);
const [user,setUser] = useState({});
const [repos,setRepos] = useState([]);
const [loading,setLoading] = useState(false);
const [alert,setAlert] = useState(null);
const [showClear,setShowClear] = useState(false);


  //Use this if you want to see users when the component mounts.
  // async componentDidMount(){
  //   //We want to change loading to true
  //   this.setState({loading:true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clientsecret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users: res.data, loading:false});
  // }

 

//Get a single github user
const getUser = async (login) =>{
  setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${login}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
};

// Get  users' repos
const getUserRepos = async (login) =>{
  setLoading(true);
  const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   setRepos(res.data);
   setLoading(false);
};

//Clear users on page
const clearUsers = () =>{
setUsers([]);
setLoading(false);
};

//Put the alert into the state
const showAlert = (msg, type) => {
  setAlert({msg:msg, type:type})
  //Have the alert go away on its own
  setTimeout(()=>{setAlert(null)}, 5000)
}
    return (
      <GithubState> 
      <Router>
      <div className="App">
        <Navbar title="GitHub Finder" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props =>(
              <Fragment>
              <Search 
              clearUsers = {clearUsers} 
              showClear = {users.length > 0 ? true: false}
              setAlert = {showAlert}
           />
           <Users loading={loading} users={users} />
              </Fragment>
            )}
            />
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={ props=>(
              <User {...props}  getUser={getUser} getUserRepos={getUserRepos} user={user} loading={loading} repos={repos} />
            )} />
          </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  }


export default App;
