import './FavoritesPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import MixModal from '../Modals/MixModal/MixModal';

export default function FavoritesPage({user,showMixModal,setShowMixModal,mixToCreate,setMixToCreate}){
    document.title = 'GutHub - Your Favorites'

    function clickAway(){
        setShowMixModal(false);
    }

    function clickButton(){
        setShowMixModal(true);
    }

    let mix = {
        "user_id": 1,
        "image_url": 'BlankGlass.png',
        "recipes": [
            {
                "ingredient_id": 12,
                "parts": 1
            },
            {
                "ingredient_id": 42,
                "parts": 2
            }
        ]
    }

    return(
        <React.Fragment>
            {showMixModal?null:<button onClick={clickButton}>SHOW MODAL</button>}
            {showMixModal?<div onClick={clickAway} className="modal-curtain"></div>:null}
            {showMixModal?<div className='modal-container'>
                <MixModal user={user} setShowMixModal={setShowMixModal} drink={mix}/>
            </div>:null}
        </React.Fragment>
    )
}