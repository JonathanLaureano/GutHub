import './Header.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import axios from 'axios';
import SignInModal from '../SignInModal/SignInModal';
import UserIcon from './user.png'

export default function Header({signedIn,setSignedIn,showProfileModal,setShowProfileModal}){

    let history=useHistory();

    function handleProfileClick(){
        setShowProfileModal(true)
    }



    return(
        <React.Fragment>
            <div className='header-nav'>
                <img src={"https://img.icons8.com/material-rounded/384/000000/user.png"} onClick={handleProfileClick} className='profile-picture'/>
            </div>
        </React.Fragment>
    )
}