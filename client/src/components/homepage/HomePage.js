import './HomePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function HomePage(){
    document.title = 'GutHub - Home'
    return(
        <React.Fragment>
            {/* <div className='parallax'> */}
                <h3 className='subtitle'>Welcome to</h3>
                <div className="logo"><b>G<span>ut</span>H<span>u</span>b</b></div>
                <input 
                    type='text'
                    placeholder='Search For A Drink'
                    autoComplete='off'
                    cursor='pointer'
                    className='home-search'
                    >
                </input>
            {/* </div>
            <div style={{height:"1000px", backgroundColor:"black", fontSize:"36px", color:'#fff'}}>
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div> */}
        </React.Fragment>
    )
}