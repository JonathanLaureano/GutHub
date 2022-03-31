import './FavoritesPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import ProfileModal from '../Modals/ProfileModal/ProfileModal';

export default function FavoritesPage({user,showProfileModal,setShowProfileModal}){
    document.title = 'GutHub - Your Favorites'

    function clickAway(){
        setShowProfileModal(false);
    }

    function clickButton(){
        setShowProfileModal(true);
    }

    return(
        <React.Fragment>
            {showProfileModal?null:<button onClick={clickButton}>SHOW MODAL</button>}
            {showProfileModal?<div onClick={clickAway} className="modal-curtain"></div>:null}
            {showProfileModal?<div className='modal-container'>
                <ProfileModal setShowProfileModal={setShowProfileModal} profile={user}/>
            </div>:null}
        </React.Fragment>
    )
}