import './HomePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function HomePage(){
    document.title = 'GutHub - Home'
    return(
        <React.Fragment>
            <h3 className='subtitle'>Welcome to</h3>
            <h1 className='title'>GutHub</h1>
            <input 
                type='text'
                placeholder='Enter a Drink Here...'
                autoComplete='off'
                cursor='pointer'
                className='home-search'
                >
            </input>
        </React.Fragment>
    )
}