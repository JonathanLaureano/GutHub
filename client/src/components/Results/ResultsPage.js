import './ResultsPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import DrinkCard from '../DrinkCard/DrinkCard';
import { animateScroll as ScrollAction } from 'react-scroll';


function scrollBot() {
    // ScrollAction.scrollToBottom();
    let cards = document.getElementById('cards')
    cards.scroll(0, 100)
}



export default function ResultsPage({drinks}) {

    function displayDrinks(data){
            if (data.length>=20) {
                return <React.Fragment>
                    {drinkCardsRow(data.slice(0,4))}
                    {drinkCardsRow(data.slice(4,8))}
                    {drinkCardsRow(data.slice(8,12))}
                    {drinkCardsRow(data.slice(12,16))}
                    {drinkCardsRow(data.slice(16,20))}
                    {drinkCardsRow(data.slice(20,))}
                </React.Fragment>}
            else if (data.length>=16)
                {return <React.Fragment>
                    {drinkCardsRow(data.slice(0,4))}
                    {drinkCardsRow(data.slice(4,8))}
                    {drinkCardsRow(data.slice(8,12))}
                    {drinkCardsRow(data.slice(12,16))}
                    {drinkCardsRow(data.slice(16,))}
                </React.Fragment>}
            else if (data.length>=12 ){
                return <React.Fragment>
                    {drinkCardsRow(data.slice(0,4))}
                    {drinkCardsRow(data.slice(4,8))}
                    {drinkCardsRow(data.slice(8,12))}
                    {drinkCardsRow(data.slice(12,))}
                </React.Fragment>}
            else if (data.length>=8)
                {return <React.Fragment>
                    {drinkCardsRow(data.slice(0,4))}
                    {drinkCardsRow(data.slice(4,8))}
                    {drinkCardsRow(data.slice(8,))}
                </React.Fragment>}
            else if (data.length>=4)
                {return <React.Fragment>
                    {drinkCardsRow(data.slice(0,4))}
                    {drinkCardsRow(data.slice(4,))}
                </React.Fragment>}
            else
                {return <React.Fragment>
                    {drinkCardsRow(data.slice(0,4))}
                </React.Fragment>}
            }
        
    function drinkCardsRow(data) {
        return <div className='drink-cards-container'>
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
            <div className='search-results-title'>Search Results</div>
            {/* <button onClick={scrollBot}>Test</button> */}

            <div className='search-results-container'>
                <div className='search-results-card' id='cards'>
                    {displayDrinks(drinks)}
                </div>
            </div>
        </React.Fragment>
    )
}