import './HomePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function HomePage(){
    return(
        <React.Fragment>
            <div>This is the HomePage</div>
            <div className='link-container'>
                <a className="" href="/mix">Mixing</a>
                <a className="" href="/results">Results</a>
                <a className="" href="/drinks">Drinks</a>
                <a className="" href="/seasonal">Seasonal</a>
            </div>

        </React.Fragment>
    )
}