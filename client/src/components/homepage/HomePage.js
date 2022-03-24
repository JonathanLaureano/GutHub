import './HomePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function HomePage(){
    document.title = 'GutHub - Home'
    return(
        <React.Fragment>
            <h3 className='subtitle'>Welcome to</h3>
            {/* <h1 className='title'>GutHub</h1> */}
            <div className="logo"><b>G<span>ut</span>H<span>u</span>b</b></div>
            <input 
                type='text'
                placeholder='Search For A Drink'
                autoComplete='off'
                cursor='pointer'
                className='home-search'
                >
            </input>
        </React.Fragment>
    )
}