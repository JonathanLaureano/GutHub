import './Header.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import SignInModal from './SignInModal/SignInModal';

export default function Header({username,password,passwordConfirmation,setUsername,setPassword,setPasswordConfirmation,handleLogInSubmit,showSignInModal,setShowSignInModal,signedIn,signUpUsername,setSignUpUsername,signUpPassword,setSignUpPassword,signUpPasswordConfirmation,setSignUpPasswordConfirmation,signUpImage,setSignUpImage,signUpDesc,setSignUpDesc, handleSignUpSubmit}){

    function handleSignIn(){
        setShowSignInModal(true)
    }

    return(
        <React.Fragment>
            <div className='header-nav'>
                <a className="" href="/profile">ProfilePage</a>
                <div><strong>-</strong></div>
                {showSignInModal?<SignInModal 
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    passwordConfirmation={passwordConfirmation}
                    setPasswordConfirmation={setPasswordConfirmation}
                    handleLogInSubmit={handleLogInSubmit}
                    showSignInModal={showSignInModal}
                    setShowSignInModal={setShowSignInModal}
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
                    />:null}
                    {signedIn?<button>Log Out</button>:<button onClick={handleSignIn}>Sign In</button>}
            </div>
        </React.Fragment>
    )
}