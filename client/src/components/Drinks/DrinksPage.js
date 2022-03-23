import './DrinksPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function DrinksPage(){
    document.title = 'GutHub - Drinks'
    return(
        <React.Fragment>
            <div>This is the DrinksPage</div>
            <a className="" href="/">Home</a>
        </React.Fragment>
    )
}