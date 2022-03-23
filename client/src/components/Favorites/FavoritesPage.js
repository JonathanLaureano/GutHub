import './FavoritesPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function FavoritesPage(){
    document.title = 'GutHub - Your Favorites'
    return(
        <React.Fragment>
            <div>This is your FavoritesPage</div>
            <a className="" href="/profile">Back</a>
        </React.Fragment>
    )
}