import './MixPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function MixPage(){
    document.title = 'GutHub - Mixing'
    return(
        <React.Fragment>
            <div>This is the MixPage</div>
            <a className="" href="/">Home</a>
        </React.Fragment>
    )
}