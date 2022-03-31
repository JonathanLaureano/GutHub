import './Header.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import axios from 'axios';
import SignInModal from '../SignInModal/SignInModal';
import UserIcon from './user-icon.png'

export default function Header({signedIn,setSignedIn,showProfileModal,setShowProfileModal}){

    let history=useHistory();

    function handleProfileClick(){
        // history.push('/profile');
        setShowProfileModal(true)
        console.log('working')
    }

    function handleLogOut(){
        setSignedIn(false)
    }


    return(
        <React.Fragment>
            <div className='header-nav'>
                {/* <a className="header-link" href="/profile">Navigation</a> */}
                {/* <div><strong>-</strong></div> */}
                {/* {signedIn?<button className="header-logOut" onClick={handleLogOut}>Log Out</button>:<button className="header-signIn">Log Out</button>} */}
                <img src={UserIcon} onClick={handleProfileClick} className='profile-picture'/>
            </div>
        </React.Fragment>
    )
}