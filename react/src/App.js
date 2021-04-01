import logo from './logo.svg';
import React from 'react';
import "./App.css";


import GetAllFeedback from './components/admin/GetAllFeedback';
import GetAllWaterInfo from './components/admin/GetAllWaterInfo';
import GetFeedbackId from './components/admin/GetFeedbackId';

import AddFeedback from './components/User/AddFeedback';
import GetFeedback from './components/User/GetFeedback';
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
    <Route exact path="/GetFeedback" component={GetFeedback} />
    

    {/* Admin Section Checking */}
    <Route exact path="/admin" component={GetAllWaterInfo} />
    <Route exact path="/GetFeedbackId" component={GetFeedbackId} />
    <Route exact path="/GetAllFeedback" component={GetAllFeedback} />


  </div>
  );
  
}

export default App;
