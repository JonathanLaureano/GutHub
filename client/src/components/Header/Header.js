import './Header.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function Header(){
    return(
        <React.Fragment>
            <div className='header-nav'>
                <div>GutHub</div>
                <a className="" href="/profile">ProfilePage</a>
            </div>
        </React.Fragment>
    )
}