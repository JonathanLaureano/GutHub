import './FeaturedDrink.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function FeaturedDrinkCard({color}){
    return(
        <div className='card' style={{backgroundColor:color}}>
            
        </div>
    )
}