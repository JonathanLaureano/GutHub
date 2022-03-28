import './MixPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import IngredientCard from '../IngredientCard/IngedientCard';
import { animateScroll as ScrollAction } from 'react-scroll';


function scrollBot() {
    // ScrollAction.scrollToBottom();
    let cards = document.getElementById('cards')
    cards.scroll(0, 100)
}



export default function MixPage({ingredients}) {

    function displayIngredients(data){
            if (data.length>=20) {
                return <React.Fragment>
                    {ingredientCardsRow(data.slice(0,4))}
                    {ingredientCardsRow(data.slice(4,8))}
                    {ingredientCardsRow(data.slice(8,12))}
                    {ingredientCardsRow(data.slice(12,16))}
                    {ingredientCardsRow(data.slice(16,20))}
                    {ingredientCardsRow(data.slice(20,))}
                </React.Fragment>}
            else if (data.length>=16)
                {return <React.Fragment>
                    {ingredientCardsRow(data.slice(0,4))}
                    {ingredientCardsRow(data.slice(4,8))}
                    {ingredientCardsRow(data.slice(8,12))}
                    {ingredientCardsRow(data.slice(12,16))}
                    {ingredientCardsRow(data.slice(16,))}
                </React.Fragment>}
            else if (data.length>=12 ){
                return <React.Fragment>
                    {ingredientCardsRow(data.slice(0,4))}
                    {ingredientCardsRow(data.slice(4,8))}
                    {ingredientCardsRow(data.slice(8,12))}
                    {ingredientCardsRow(data.slice(12,))}
                </React.Fragment>}
            else if (data.length>=8)
                {return <React.Fragment>
                    {ingredientCardsRow(data.slice(0,4))}
                    {ingredientCardsRow(data.slice(4,8))}
                    {ingredientCardsRow(data.slice(8,))}
                </React.Fragment>}
            else if (data.length>=4)
                {return <React.Fragment>
                    {ingredientCardsRow(data.slice(0,4))}
                    {ingredientCardsRow(data.slice(4,))}
                </React.Fragment>}
            else
                {return <React.Fragment>
                    {ingredientCardsRow(data.slice(0,4))}
                </React.Fragment>}
            }
        
    function ingredientCardsRow(data) {
        return <div className='drinks-page-cards-container'>
            {data.map(ingredient => {
                return (<IngredientCard
                    ingredient={ingredient}
                    key={ingredient.id}
                />)
            })}
        </div>
    }

    return (
        <React.Fragment>
            <div className='search-results-title'>ingredients</div>
            {/* <button onClick={scrollBot}>Test</button> */}

            <div className='search-results-container'>
                <div className='searchResultsCardClass' id='cards'>
                    {displayIngredients(ingredients)}
                </div>
            </div>
        </React.Fragment>
    )
}