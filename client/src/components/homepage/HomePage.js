import './HomePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function HomePage(){
    document.title = 'GutHub - Home'
    return(
        <React.Fragment>
            <div className='title'>This is the HomePage</div>
        </React.Fragment>
    )
}