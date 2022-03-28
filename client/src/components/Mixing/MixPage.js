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
                    {ingredientCardsRow(data.slice(0,4))}
                    {ingredientCardsRow(data.slice(4,8))}
                    {ingredientCardsRow(data.slice(8,12))}
                    {ingredientCardsRow(data.slice(12,16))}
                    {ingredientCardsRow(data.slice(16,20))}
                    {ingredientCardsRow(data.slice(20,24))}
                    {ingredientCardsRow(data.slice(24,28))}
                    {ingredientCardsRow(data.slice(28,32))}
                    {ingredientCardsRow(data.slice(32,36))}
                    {ingredientCardsRow(data.slice(36,40))}
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
            <div className='mix-page-jug-container'></div>
            <div className='mix-page-ingredients-container'>
                <div className='mix-page-ingredients-holder' id='cards'>
                    {displayIngredients(ingredients)}
                </div>
            </div>
        </React.Fragment>
    )
}