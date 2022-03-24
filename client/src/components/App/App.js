import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import HomePage from '../HomePage/HomePage';
import MixPage from '../Mixing/MixPage';
import ResultsPage from '../Results/ResultsPage';
import DrinksPage from '../Drinks/DrinksPage';
import SeasonalPage from '../Seasonal/SeasonalPage';
import Header from '../Header/Header';
import ProfilePage from '../Profile/ProfilePage';
import FavoritesPage from '../Favorites/FavoritesPage';


function App() {
  //User Auth:
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordConfirmation, setSignUpPasswordConfirmation] = useState("");
  const [signUpImage, setSignUpImage] = useState("");
  const [signUpDesc,setSignUpDesc] = useState("")

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  function handleSignUpSubmit(e) {
    e.preventDefault();
    // axios.post("/signup", {
    //     username,
    //     password,
    //     image_url: signUpImage,
    //     description: signUpDesc,
    //     password_confirmation: signUpPasswordConfirmation,
    //   })
    //   .then(r=>{
    //       setSignedIn(true)
    //       setShowSignInModal(!showSignInModal)
    //     });
        setSignedIn(true)
        setShowSignInModal(!showSignInModal)

  }

  function handleLogInSubmit(e){
    e.preventDefault();
    console.log(e.target.parentNode)
    // e.target.parentNode;
    setSignedIn(true)
    setShowSignInModal(!showSignInModal)
  }

  //Modals:
  let [showSignInModal, setShowSignInModal] = useState(false);

  return (
      <div className="App">
        {/* <div>This is the App Page</div> */}
        <Header
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogInSubmit={handleLogInSubmit}
          showSignInModal={showSignInModal}
          setShowSignInModal={setShowSignInModal}
          signedIn={signedIn}
          signUpUsername={signUpUsername}
          setSignUpUsername={setSignUpUsername}
          signUpPassword={signUpPassword}
          setSignUpPassword={setSignUpPassword}
          signUpPasswordConfirmation={signUpPasswordConfirmation}
          setSignUpPasswordConfirmation={setSignUpPasswordConfirmation}
          signUpImage={signUpImage}
          setSignUpImage={setSignUpImage}
          signUpDesc={signUpDesc}
          setSignUpDesc={setSignUpDesc}
          handleSignUpSubmit={handleSignUpSubmit}
          />
        <Switch>
          <Route exact path='/'>
              <HomePage/>
          </Route>
          <Route path='/profile'>
              <ProfilePage/>
          </Route>
          <Route path='/favorites'>
              <FavoritesPage/>
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
          <Route path='/seasonal'>
              <SeasonalPage/>
          </Route>

        </Switch>
      </div>
  );
}

export default App;
