import './DrinksPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import FeaturedDrinkCard from './FeaturedDrink/FeaturedDrinkCard';
import Slider from './FeaturedCarousel/Slider';

export default function DrinksPage(){
    document.title = 'GutHub - Drinks'
    return(
        <React.Fragment>
            {/* <Slider>
                <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
                <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 245, 195)'/>

            </Slider> */}
            <div className='featured-carousel'>
                {/* <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
                <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 245, 195)'/>
                <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
                <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 245, 195)'/>
                <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
                <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 245, 195)'/>
                <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
                <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
                <FeaturedDrinkCard color='rgb(159, 245, 195)'/>

 */}

            </div>
            <div>This is the DrinksPage</div>
            <a className="" href="/">Home</a>
        </React.Fragment>
    )
}