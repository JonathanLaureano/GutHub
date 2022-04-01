import './FavoritesPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import MixModal from '../Modals/MixModal/MixModal';

export default function FavoritesPage({user,showMixModal,setShowMixModal,mixToCreate,setMixToCreate,ingredients,handleCreateDrinkSubmit}){
    document.title = 'GutHub - Your Favorites'

    function clickAway(){
        setShowMixModal(false);
    }

    function clickButton(){
        setShowMixModal(true);
    }

    let mix = {
        "image_url": 'BlankGlass.png',
        "recipes": [
            {
                "ingredient_id": 12,
                "parts": 1.33
            },
            {
                "ingredient_id": 1,
                "parts": 2.66
            }
        ]
    }

    return(
        <React.Fragment>
            {showMixModal?null:<button onClick={clickButton}>SHOW MODAL</button>}
            {showMixModal?<div onClick={clickAway} className="modal-curtain"></div>:null}
            {showMixModal?<div className='modal-container'>
                <MixModal user={user} setShowMixModal={setShowMixModal} drink={mix} ingredients={ingredients} handleCreateDrinkSubmit={handleCreateDrinkSubmit}/>
            </div>:null}
        </React.Fragment>
    )
}