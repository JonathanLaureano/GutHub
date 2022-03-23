import './ResultsPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function ResultsPage(){
    return(
        <React.Fragment>
            <div>This is the ResultsPage</div>
            <a className="" href="/">Home</a>
        </React.Fragment>
    )
}