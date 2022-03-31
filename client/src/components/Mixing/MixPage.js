import './MixPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import IngredientCard from '../IngredientCard/IngedientCard';
import { animateScroll as ScrollAction } from 'react-scroll';
import DrinkModal from '../Modals/DrinkModal/DrinkModal';

export default function MixPage({ingredients,setIngredients,showDrinkModal,setShowDrinkModal,selectedDrink,setSelectedDrink,scrollTopMix}) {
    let [mixes,setMixes]=useState({"mix":[
    ]});

    let sortedIngredients = ingredients.sort((ingred1,ingred2)=>{
        return ingred1.ingredient_type.localeCompare(ingred2.ingredient_type)
    })

    let sortedMix = mixes.mix.sort((recipe1,recipe2)=>{
        return parseInt(recipe1["ingredient_id"]) - parseInt(recipe2["ingredient_id"])
    })

    let mixesToDisplay= sortedMix.map(mix=>{
        return(
            <div key={mix["ingredient_id"]} className='mix-recipe'>{ingredients.filter(ingredient=> ingredient.id==[mix["ingredient_id"]])[0].name}: {mix["parts"]}</div>
        )
    })

    function handleClickArrow(){
        resetIngredients();
        scrollTopMix();
    }

    function handleMixClick(){
        console.log(mixes.mix);
        axios.post('/mix',mixes)
        .then(r=>{
            console.log(r.data[0])
            setSelectedDrink(r.data[0])
            setShowDrinkModal(true)
        })
    }

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
                    {ingredientCardsRow(data.slice(39,42))}
                    {ingredientCardsRow(data.slice(42,45))}
                    {ingredientCardsRow(data.slice(45,48))}
                </React.Fragment>}
    
        
    function ingredientCardsRow(data) {
        return <div className='mix-page-ingredients-cards-container'>
            {data.map(ingredient => {
                // console.log(ingredient)
                return (<IngredientCard
                    ingredient={ingredient}
                    key={ingredient.id}
                    mixes={mixes}
                    setMixes={setMixes}
                />)
            })}
        </div>
    }

    function resetIngredients(){
        setMixes({"mix":[
        ]})
        setIngredients([])
        axios.get('/ingredients')
        .then(r => {
          setIngredients(r.data)
        })  
}

    let titleClass = mixes.mix.length==0 || showDrinkModal ?'mix-page-title-off':'mix-page-title'
    let buttonClass = showDrinkModal ?'go-home-mix-page-button-off':'go-home-mix-page-button'


    function clickOffModal(){
        setShowDrinkModal(false);
    }

    return (
        <React.Fragment>
            <div style={{marginTop:'25%'}}></div>
            <div className='mix-page-wrapper'>
                <div className={titleClass}>mixing</div>
                <div className={buttonClass} onClick={handleClickArrow}>↑</div>
            </div>
            <div className='mix-page-items-wrapper'>
                <div className='mix-page-jug-container'>
                    <button className='mix-button' onClick={handleMixClick}>MIX</button>
                    <button className='reset-mix' onClick={resetIngredients}>RESET</button>
                                {mixesToDisplay}
                </div>
                <div className='mix-page-ingredients-container'>
                    <div className='mix-page-ingredients-tab-holders'>

                    </div>
                    <div className='mix-page-ingredients-holder' id='cards'>
                        {displayIngredients(ingredients)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}