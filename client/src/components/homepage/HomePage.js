import './HomePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import {animateScroll as ScrollAction} from 'react-scroll';
import SignInModal from '../SignInModal/SignInModal';
import DrinkModal from '../Modals/DrinkModal/DrinkModal';
import ResultsPage from '../Results/ResultsPage';
import MixPage from '../Mixing/MixPage';
import ProfileModal from '../Modals/ProfileModal/ProfileModal';


export default function HomePage({drinks,setDrinks,ingredients,setIngredients,searchResults,setSearchResults,searchActive,setSearchActive,searchParams,setSearchParams,handleSearchChange,handleSearchSubmit,username,password,passwordConfirmation,setUsername,setPassword,setPasswordConfirmation,handleLogInSubmit,showSignInModal,setShowSignInModal,signedIn,signUpFirstName,setSignUpFirstName,signUpLastName,setSignUpLastName,signUpUsername,setSignUpUsername,signUpPassword,setSignUpPassword,signUpPasswordConfirmation,setSignUpPasswordConfirmation,signUpImage,setSignUpImage,signUpDesc,setSignUpDesc,handleSignUpSubmit,showDrinkModal,setShowDrinkModal,selectedDrink,setSelectedDrink,mixActive,setMixActive}){
    document.title = 'GutHub - Home';

    function handleSignIn(){
        setShowSignInModal(true)
    }

    function scrollTop(){
        setSearchParams('')
        ScrollAction.scrollToTop();
        setTimeout(()=>{
            setSearchActive(false)
        },750)
    }

    function scrollTopMix(){
        //reset ingredients 
        ScrollAction.scrollToTop();
        setTimeout(()=>{
            setMixActive(false)
        },750)
    }

    function clickOffModal(){
        setShowDrinkModal(false);
    }

    function clickMixActivateButton(){
        setMixActive(true)
        ScrollAction.scrollToBottom();
    }

    return(
        <React.Fragment>
            {/* <div className='parallax'> */}
                <h3 className={signedIn?'subtitle':'subtitle hidden'}>Welcome to</h3>
                <div onClick={clickMixActivateButton} className={signedIn && !searchActive && !mixActive ?"logo":"logo off"}><b>G<span>ut</span>H<span>u</span>b</b></div>
                {signedIn?<form onSubmit={handleSearchSubmit}><input 
                    type='text'
                    placeholder='Search For A Drink'
                    autoComplete='off'
                    cursor='pointer'
                    className='home-search'
                    value={searchParams}
                    onChange={handleSearchChange}
                    id='search-input'
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
            {showDrinkModal?<div className='modal-container'>
                <DrinkModal drink={selectedDrink} setShowDrinkModal={setShowDrinkModal}/>
            </div>:null}
            {showDrinkModal?<div onClick={clickOffModal} className="modal-curtain"></div>:null}
            {searchActive?<ResultsPage 
                searchActive={searchActive}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
                scrollTop={scrollTop}
                showDrinkModal={showDrinkModal}
                setShowDrinkModal={setShowDrinkModal}    
                selectedDrink={selectedDrink}
                setSelectedDrink={setSelectedDrink}    
            />:null}
            {mixActive?<MixPage
                ingredients={ingredients}
                setIngredients={setIngredients}
                showDrinkModal={showDrinkModal}
                setShowDrinkModal={setShowDrinkModal}
                selectedDrink={selectedDrink}
                setSelectedDrink={setSelectedDrink}
                scrollTopMix={scrollTopMix}
            />:null}


                }
        </React.Fragment>
    )
}