import React, {Fragment} from 'react';
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
class App extends React.Component {
//To bring state into our app lets
//This is NOT a test(it is)
state = {
  users:[],
  user:{},
  repos:[],
  loading:false,
  showClear: false,
  alert:null
};

  //Use this if you want to see users when the component mounts.
  // async componentDidMount(){
  //   //We want to change loading to true
  //   this.setState({loading:true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clientsecret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users: res.data, loading:false});
  // }

  //Pull state from Seach component
  searchUsers = async (text) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading:false});
};

//Get a single github user
getUser = async (login) =>{
  this.setState({loading:true});
  const result = await axios.get(`https://api.github.com/users/${login}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({user:result.data, loading:false});
};

// Get  users' repos
getUserRepos = async (login) =>{
  this.setState({loading:true});
  const result = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({repos:result.data, loading:false});
};

//Clear users on page
clearUsers = () =>{
this.setState({users:[], loading:false})
};

//Put the alert into the state
setAlert = (msg, type) => {
  this.setState({alert:{msg:msg, type:type}});
  //Have the alert go away on its own
  setTimeout(()=>{
    this.setState({alert:null})}, 5000)
}
  render() {
    const { repos, user, users, loading} = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar title="GitHub Finder" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path='/' render={props =>(
              <Fragment>
              <Search searchUsers={this.searchUsers} 
              clearUsers = {this.clearUsers} 
              showClear = {users.length > 0 ? true: false}
              setAlert = {this.setAlert}
           />
           <Users loading={loading} users={users} />
              </Fragment>
            )}
            />
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={ props=>(
              <User {...props}  getUser={this.getUser} getUserRepos={this.getUserRepos} user={user} loading={loading} repos={repos} />
            )} />
          </Switch>
        </div>
      </div>
      </Router>
    
    );


  }
}

export default App;
