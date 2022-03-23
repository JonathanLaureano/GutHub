import './Header.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import SignInModal from './SignInModal/SignInModal';

export default function Header({username,password,passwordConfirmation,setUsername,setPassword,setPasswordConfirmation,handleSubmit,showSignInModal,setShowSignInModal}){

    function handleSignIn(){
        setShowSignInModal(true)
    }

    return(
        <React.Fragment>
            <div className='header-nav'>
                <a className="" href="/profile">ProfilePage</a>
                <div>GutHub</div>
                {showSignInModal?<SignInModal 
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    passwordConfirmation={passwordConfirmation}
                    setPasswordConfirmation={setPasswordConfirmation}
                    handleSubmit={handleSubmit}
                    showSignInModal={showSignInModal}
                    setShowSignInModal={setShowSignInModal}
                    />:<button onClick={handleSignIn}>Sign Up/Sign In</button>}
            </div>
        </React.Fragment>
    )
}