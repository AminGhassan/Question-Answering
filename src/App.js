import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';


class App extends React.Component {
  render(){
  return (
    <div>
      <Router>
      <NavBar/>

      <Route  exact path='/' component={Home}/>
      <Route exact path='/about'  component={About}/>
      <Route exact path='/profile'  component={Profile}/>

      </Router>

    </div>
  );
}
}
export default App;
