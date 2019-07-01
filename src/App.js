import React from 'react';
import './App.css'; //Global css, renders on all pages and all components
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

//Grab state
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
//Once the app mounts lets get the response from the api using async await
const App = () => {
  const baseUrl = process.env.PUBLIC_URL; // will be

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="GitHub Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
