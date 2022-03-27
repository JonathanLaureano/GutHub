import './ProfilePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function ProfilePage(){
    document.title = 'GutHub - Profile'
    return(
        <React.Fragment>
            <div className='profile-nav'>
                <div>This is the ProfilePage</div>
                <a className="" href="/favorites">Favorites</a>
                <a className="" href="/">Home</a>
                <a className="" href="/search-results">Search Results</a>
            </div>
        </React.Fragment>
    )
}