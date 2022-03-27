import './ResultsPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function ResultsPage(){
    document.title = 'GutHub - Results'
    return(
        <React.Fragment>
            <div className='search-results-title'>Search Results</div>
            <div className='search-results-container'>
                <div className='search-results-card'>
                
                </div>
            </div>
        </React.Fragment>
    )
}