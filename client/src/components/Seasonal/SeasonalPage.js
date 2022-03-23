import './SeasonalPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function SeasonalPage(){
    document.title = 'GutHub - Seasonal Drinks'
    return(
        <React.Fragment>
            <div>This is the SeasonalPage</div>
            <a className="" href="/">Home</a>
        </React.Fragment>
    )
}