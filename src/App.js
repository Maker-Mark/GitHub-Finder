import React, { Fragment, useState } from "react";
import GithubState from "./context/github/GithubState";
import "./App.css"; //Global css, renders on all pages and all components
import Navbar from "./components/layouts/Navbar";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Users from "./components/users/Users";
import User from "./components/users/User";

//Once the app mounts lets get the response from the api using async await
const App = () => {
  //To bring state into our app lets
  const [alert, setAlert] = useState(null);
  const [showClear, setShowClear] = useState(false);

  //Put the alert into the state
  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    //Have the alert go away on its own
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="GitHub Finder" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
