import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import HomePage from '../homepage/HomePage'
import MixPage from '../MixPage/MixPage'


function App() {

  return (
      <div className="App">
        {/* <div>This is the App Page</div> */}
        <Switch>
          <Route exact path='/'>
              <HomePage/>
          </Route>
          <Route path='/mix'>
              <MixPage/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
