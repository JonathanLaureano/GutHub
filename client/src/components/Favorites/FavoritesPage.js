import './FavoritesPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import MixMatchModal from '../Modals/MixMatch/MixMatchModal';

export default function FavoritesPage(){
    document.title = 'GutHub - Your Favorites'
    let [modalActive,setModalActive] = useState(false)

    function clickAway(){
        setModalActive(false);
    }
    return(
        <React.Fragment>
            <div className="modal-curtain"></div>
            <div className='mock-container'>
                <MixMatchModal onDrop={clickAway}/>
            </div>
        </React.Fragment>
    )
}