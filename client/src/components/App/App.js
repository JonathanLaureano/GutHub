import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import HomePage from '../HomePage/HomePage'
import MixPage from '../Mixing/MixPage'
import ResultsPage from '../Results/ResultsPage';
import DrinksPage from '../Drinks/DrinksPage';


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
          <Route path='/results'>
              <ResultsPage/>
          </Route>
          <Route path='/drinks'>
              <DrinksPage/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
