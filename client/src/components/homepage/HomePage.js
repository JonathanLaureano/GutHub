import './HomePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import SignInModal from '../SignInModal/SignInModal';
import {animateScroll as ScrollAction} from 'react-scroll';


export default function HomePage({searchParams,setSearchParms,handleSearchChange,handleSearchSubmit,username,password,passwordConfirmation,setUsername,setPassword,setPasswordConfirmation,handleLogInSubmit,showSignInModal,setShowSignInModal,signedIn,signUpFirstName,setSignUpFirstName,signUpLastName,setSignUpLastName,signUpUsername,setSignUpUsername,signUpPassword,setSignUpPassword,signUpPasswordConfirmation,setSignUpPasswordConfirmation,signUpImage,setSignUpImage,signUpDesc,setSignUpDesc,handleSignUpSubmit}){
    document.title = 'GutHub - Home';

    function handleSignIn(){
        setShowSignInModal(true)
    }

    function scrollTop(){
        ScrollAction.scrollToTop();
    }

    return(
        <React.Fragment>
            {/* <div className='parallax'> */}
                <h3 className={signedIn?'subtitle':'subtitle hidden'}>Welcome to</h3>
                <div className={signedIn?"logo":"logo off"}><b>G<span>ut</span>H<span>u</span>b</b></div>
                {signedIn?<form onSubmit={handleSearchSubmit}><input 
                    type='text'
                    placeholder='Search For A Drink'
                    autoComplete='off'
                    cursor='pointer'
                    className='home-search'
                    onChange={handleSearchChange}
                    >
                </input></form>:<button className='home-signIn' onClick={handleSignIn}>Sign In</button>}
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
                        signUpFirstName={signUpFirstName}
                        setSignUpFirstName={setSignUpFirstName}
                        signUpLastName={signUpLastName}
                        setSignUpLastName={setSignUpLastName}
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

            {/* </div> */}
            {/* <div style={{height:"800px", backgroundColor:"black", fontSize:"36px",marginTop:"250px", color:'#fff'}}>
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
            <button onClick={scrollTop}>test</button> */}
        </React.Fragment>
    )
}