import './Header.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import SignInModal from '../SignInModal/SignInModal';

export default function Header({signedIn,setSignedIn}){

    function handleLogOut(){
        setSignedIn(false)
    }

    return(
        <React.Fragment>
            <div className='header-nav'>
                <a className="header-link" href="/profile">Navigation</a>
                {/* <div><strong>-</strong></div> */}
                {/* {signedIn?<button className="header-logOut" onClick={handleLogOut}>Log Out</button>:<button className="header-signIn">Log Out</button>} */}
            </div>
        </React.Fragment>
    )
}