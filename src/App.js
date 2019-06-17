import React from 'react';
import './App.css'; //Global css, renders on all pages and all components
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios'
//Once the app mounts lets get the response from the api using async await
class App extends React.Component {
//To bring state into our app lets

state = {
  users:[],
  loading:false,
}


  async componentDidMount(){
    //We want to change loading to true
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&CLIENT_SERCTER=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data, loading:false});
  }
  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" />
        <div className="container">

          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
