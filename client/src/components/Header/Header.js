import './Header.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import SignInModal from '../SignInModal/SignInModal';

export default function Header({username,password,passwordConfirmation,setUsername,setPassword,setPasswordConfirmation,handleLogInSubmit,showSignInModal,setShowSignInModal,signedIn,signUpFirstName,setSignUpFirstName,signUpLastName,setSignUpLastName,signUpUsername,setSignUpUsername,signUpPassword,setSignUpPassword,signUpPasswordConfirmation,setSignUpPasswordConfirmation,signUpImage,setSignUpImage,signUpDesc,setSignUpDesc, handleSignUpSubmit}){

    function handleSignIn(){
        setShowSignInModal(true)
    }

    return(
        <React.Fragment>
            <div className='header-nav'>
                <a className="" href="/profile">ProfilePage</a>
                <div><strong>-</strong></div>
                {signedIn?<button className="header-logOut">Log Out</button>:<button className="header-signIn">Log Out</button>}
            </div>
        </React.Fragment>
    )
}