import './MixPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import confetti from "canvas-confetti";
import IngredientCard from '../IngredientCard/IngedientCard';
import { animateScroll as ScrollAction } from 'react-scroll';
import DrinkModal from '../Modals/DrinkModal/DrinkModal';


export default function MixPage({user,ingredients,setIngredients,showDrinkModal,setShowDrinkModal,selectedDrink,setSelectedDrink,scrollTopMix,showProfileModal,matchFound,setMatchFound,mixToCreate,setMixToCreate,showMixModal, setShowMixModal}) {
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

    // * categories
    let [selectedCategory, setSelectedCategory] = useState('ALL')
    let categories =['ALL','ALCOHOL','LIQUID','SOLID']
    let categoriesToDisplay = categories.map(category=>{
        let categoryClassName = selectedCategory === category ? 'mix-page-ingredients-type-tab selected' : 'mix-page-ingredients-type-tab'
        return (
            <div className={categoryClassName} onClick={handleClickTab}>{category}</div>
        )
    })

    function handleClickTab(e){
        setSelectedCategory(e.target.textContent)
    }

    function handleClickArrow(){
        resetIngredients();
        scrollTopMix();
    }

    function handleMixClick(){
        console.log(mixes.mix);
        if (mixes.mix.length <=1){
            alert("               MIX ERORR: \nPlease add more than one ingredient.")
        } else {
        axios.post('/mix',mixes)
        .then(r=>{
            if (r.data[0]===undefined){
                alert("No Match Found")
                setMixToCreate({
                    "image_url": 'BlankGlass.png',
                    "recipes": mixes.mix
                })
                setShowMixModal(true)
            } else {
                console.log(r.data[0])
                setSelectedDrink(r.data[0])
                setShowDrinkModal(true)
                celebrate();
                setMatchFound(true);
            }
        })
    }

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
                    {ingredientCardsRow(data.slice(48,51))}
                    {ingredientCardsRow(data.slice(51,54))}
                    {ingredientCardsRow(data.slice(54,57))}
                    {ingredientCardsRow(data.slice(57,60))}
                    {ingredientCardsRow(data.slice(60,63))}
                </React.Fragment>}
    
        
    function ingredientCardsRow(data) {
        return <div className='mix-page-ingredients-cards-container'>
            {data.map(ingredient => {
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

    let titleClass = mixes.mix.length==0 || showDrinkModal || showProfileModal || showMixModal ?'mix-page-title-off':'mix-page-title'
    let buttonClass = mixes.mix.length==0 || showDrinkModal || showProfileModal || showMixModal ?'go-home-mix-page-button-nolight':'go-home-mix-page-button'


    function clickOffModal(){
        setShowDrinkModal(false);
    }

    let count = 200;
    let defaults = {
        origin: { y: 0.9 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    function celebrate(){
        fire(0.35, {
            spread: 36,
            startVelocity: 65,
        });
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
        fire(0.05, {
            spread: 130,
            startVelocity: 55,
        });
    }

    return (
        <React.Fragment>
            <div style={{marginTop:'22.5%'}}></div>
            <div className='mix-page-wrapper'>
                <div className={titleClass}>mixing</div>
                <div className={buttonClass} onClick={handleClickArrow}>↑</div>
            </div>
            <div className='mix-page-items-wrapper'>
                <div className='mix-page-jug-container'>
                    <button className='mix-button' onClick={handleMixClick}>MIX</button>
                    <button className='reset-mix' onClick={resetIngredients}>RESET</button>
                    <div className='mix-recipes-wrapper'>
                        {mixesToDisplay}
                    </div>
                </div>
                <div className='mix-page-ingredients-container'>
                    <div className='mix-page-ingredients-tab-holders'>
                        {/* <div val='all' className='mix-page-ingredients-type-tab' onClick={handleClickTab}>ALL</div>
                        <div val='Alcohol' className='mix-page-ingredients-type-tab' onClick={handleClickTab}>ALCOHOL</div>
                        <div val='Liquid' className='mix-page-ingredients-type-tab' onClick={handleClickTab}>LIQUIDS</div>
                        <div val= 'Solid' className='mix-page-ingredients-type-tab' onClick={handleClickTab}>SOLIDS</div> */}
                        {categoriesToDisplay}
                    </div>
                    <div className='mix-page-ingredients-holder' id='cards'>
                        {displayIngredients(ingredients)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}