var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


// var Route = require('react-router').Route; <--- same as above except above uses object destructuring syntax from es6
//if the path is /about then it'll render About
//however if the path is just / it'll render Weather
ReactDOM.render(
  <p>Boiler Plate Project</p>,
  document.getElementById('app')
);


