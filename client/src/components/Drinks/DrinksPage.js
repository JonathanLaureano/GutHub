import './DrinksPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import FeaturedDrinkCard from './FeaturedDrink/FeaturedDrinkCard';
import DrinkCard from '../DrinkCard/DrinkCard';
import Slider from './FeaturedCarousel/Slider';

export default function DrinksPage({drinks}) {
    document.title = 'GutHub - Drinks'
    function displayDrinks(data) {
        if (data.length >= 20) {
            return <React.Fragment>
                {drinkCardsRow(data.slice(0, 4))}
                {drinkCardsRow(data.slice(4, 8))}
                {drinkCardsRow(data.slice(8, 12))}
                {drinkCardsRow(data.slice(12, 16))}
                {drinkCardsRow(data.slice(16, 20))}
                {drinkCardsRow(data.slice(20,))}
            </React.Fragment>
        }
        else if (data.length >= 16) {
            return <React.Fragment>
                {drinkCardsRow(data.slice(0, 4))}
                {drinkCardsRow(data.slice(4, 8))}
                {drinkCardsRow(data.slice(8, 12))}
                {drinkCardsRow(data.slice(12, 16))}
                {drinkCardsRow(data.slice(16,))}
            </React.Fragment>
        }
        else if (data.length >= 12) {
            return <React.Fragment>
                {drinkCardsRow(data.slice(0, 4))}
                {drinkCardsRow(data.slice(4, 8))}
                {drinkCardsRow(data.slice(8, 12))}
                {drinkCardsRow(data.slice(12,))}
            </React.Fragment>
        }
        else if (data.length >= 8) {
            return <React.Fragment>
                {drinkCardsRow(data.slice(0, 4))}
                {drinkCardsRow(data.slice(4, 8))}
                {drinkCardsRow(data.slice(8,))}
            </React.Fragment>
        }
        else if (data.length >= 4) {
            return <React.Fragment>
                {drinkCardsRow(data.slice(0, 4))}
                {drinkCardsRow(data.slice(4,))}
            </React.Fragment>
        }
        else {
            return <React.Fragment>
                {drinkCardsRow(data.slice(0, 4))}
            </React.Fragment>
        }
    }

    function drinkCardsRow(data) {
        return <div className='drinks-page-cards-container'>
            {data.map(drink => {
                return (<DrinkCard
                    drink={drink}
                    key={drink.id}
                />)
            })}
        </div>
    }
    // document.title = 'GutHub - Results'
    return (
        <React.Fragment>
            <div className='drinks-page-title'>AllMixes</div>
            {/* <button onClick={scrollBot}>Test</button> */}

            <div className='drinks-page-container'>
                <div className='drinks-page-card' id='cards'>
                    {displayDrinks(drinks)}
                </div>
            </div>
        </React.Fragment>
    )

//     return (
//         <React.Fragment>
//             {/* <Slider>
//                 <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
//                 <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 245, 195)'/>

//             </Slider> */}
//             <div className='featured-carousel'>
//                 {/* <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
//                 <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 245, 195)'/>
//                 <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
//                 <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 245, 195)'/>
//                 <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
//                 <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 245, 195)'/>
//                 <FeaturedDrinkCard color='rgb(243, 189, 189)'/>
//                 <FeaturedDrinkCard color='rgb(159, 175, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 205, 245)'/>
//                 <FeaturedDrinkCard color='rgb(159, 245, 195)'/>

//  */}

//         </React.Fragment>
//     )
}