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
import UpdateWaterInfo from './components/admin/UpdateWaterInfo';





function App() {
  return (
  <div className="App">
    <Route exact path="/login" component={Login} />
   {/*  */}
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/getWaterInfo/:id" component={GetWaterInfo} />
    <Route exact path="/addInfo" component={AddWaterInfo} />
    <Route exact path="/addFeedback" component={AddFeedback} />
    <Route exact path="/getFeedback" component={GetFeedback} />
    

    {/* Admin Section Checking */}
    
    <Route exact path="/admin" component={GetAllWaterInfo} />
    <Route exact path = "/admin/:id" component={UpdateWaterInfo}/>
    {/*  */}
    <Route exact path="/admin/feedback/:id" component={GetFeedbackId} />
    <Route exact path="/admin/feedback" component={GetAllFeedback} />


  </div>
  );
  
}

export default App;
