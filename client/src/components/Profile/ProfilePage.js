import './ProfilePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function ProfilePage(){
    document.title = 'GutHub - Profile'
    return(
        <React.Fragment>
            <div>This is the ProfilePage</div>
            <a className="" href="/">Home</a>
        </React.Fragment>
    )
}