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
                return <React.Fragment>
                    {ingredientCardsRow(data.slice(0,3))}
                    {ingredientCardsRow(data.slice(3,6))}
                    {ingredientCardsRow(data.slice(6,9))}
                    {ingredientCardsRow(data.slice(9,12))}
                    {ingredientCardsRow(data.slice(12,15))}
                    {ingredientCardsRow(data.slice(15,18))}
                    {ingredientCardsRow(data.slice(18,21))}
                    {ingredientCardsRow(data.slice(21,24))}
                    {ingredientCardsRow(data.slice(24,27))}
                    {ingredientCardsRow(data.slice(27,30))}
                    {ingredientCardsRow(data.slice(30,33))}
                    {ingredientCardsRow(data.slice(33,36))}
                    {ingredientCardsRow(data.slice(36,39))}

                </React.Fragment>}
    
        
    function ingredientCardsRow(data) {
        return <div className='mix-page-ingredients-cards-container'>
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
            <div className='mix-page-title'>mixing</div>
            {/* <button onClick={scrollBot}>Test</button> */}
            <div className='mix-page-items-wrapper'>
                <div className='mix-page-jug-container'></div>
                <div className='mix-page-ingredients-container'>
                    <div className='mix-page-ingredients-holder' id='cards'>
                        {displayIngredients(ingredients)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}