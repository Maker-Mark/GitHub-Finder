import React from 'react';
import './App.css'; //Global css, renders on all pages and all components
import Navbar from './components/layouts/Navbar';
import Users from './components/Users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
