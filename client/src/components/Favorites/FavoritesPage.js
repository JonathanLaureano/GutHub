import './FavoritesPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import DrinkModal from '../Modals/DrinkModal/DrinkModal';

export default function FavoritesPage(){
    document.title = 'GutHub - Your Favorites'
    let [modalActive,setModalActive] = useState(false)

    function clickAway(){
        setModalActive(false);
    }

    let mix = {
        "id": 21,
        "name": "Pink Lady",
        "image_url": "PinkLady.png",
        "user": {
        "id": 1,
        "first_name": "Henry",
        "last_name": "Miller",
        "username": "mozart@guthub.com",
        "password_digest": "$2a$12$VjBcmnhikxhC8teqwwRYGuEgFdzUa.DXouhpxB/Sw/ZT1Nsxn/k2q",
        "image_url": "",
        "description": ""
        },
        "recipes": [
        {
        "id": 88,
        "parts": 1.33,
        "ingredient": {
        "id": 7,
        "name": "Gin",
        "image_url": "Gin.png",
        "ingredient_type": "Alcohol"
        }
        },
        {
        "id": 89,
        "parts": 0.5,
        "ingredient": {
        "id": 15,
        "name": "Lime Juice",
        "image_url": "LimeJuice.png",
        "ingredient_type": "Liquid"
        }
        },
        {
        "id": 90,
        "parts": 0.5,
        "ingredient": {
        "id": 18,
        "name": "Grenadine",
        "image_url": "Grenadine.png",
        "ingredient_type": "Liquid"
        }
        },
        {
        "id": 91,
        "parts": 1,
        "ingredient": {
        "id": 41,
        "name": "Cherry",
        "image_url": "Cherry.png",
        "ingredient_type": "Solid"
        }
        }
        ]
        }
    return(
        <React.Fragment>
            <div className="modal-curtain"></div>
            <div className='mock-container'>
                <DrinkModal onDrop={clickAway} mix={mix}/>
            </div>
        </React.Fragment>
    )
}