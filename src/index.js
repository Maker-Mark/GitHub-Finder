import React from 'react'; // Main frameworks
import ReactDOM from 'react-dom'; // Renders browser
import App from './App'; //Bringing in the main app component

//React.render takes two things, 1) thing you want to render 2)Where you want to render it
ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA