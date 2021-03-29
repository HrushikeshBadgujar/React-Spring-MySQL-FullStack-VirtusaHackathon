import logo from './logo.svg';
import React from 'react';
import "./App.css";

import AddFeedback from './components/User/AddFeedback';
import GetWaterInfo from './components/User/GetWaterInfo';
import AddWaterInfo from './components/User/AddWaterInfo';
import Signup from './components/User/Signup';
import Login from './components/User/Login';
import NavBar from './components/NavBar';

import {Route, Link} from "react-router-dom";





function App() {
  return (
  <div className="App">
    <NavBar />
    <Route exact path="/" component={Login} />
    <Route exact path="/Signup" component={Signup} />
    <Route exact path="/GetWaterInfo" component={GetWaterInfo} />
    <Route exact path="/AddWaterInfo" component={AddWaterInfo} />
    <Route exact path="/AddFeedback" component={AddFeedback} />
  </div>
  );
}

export default App;
