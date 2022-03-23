import './HomePage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function HomePage(){
    return(
        <React.Fragment>
            <div>This is the HomePage</div>
            <a className="" href="/mix">Mixing</a>
        </React.Fragment>
    )
}