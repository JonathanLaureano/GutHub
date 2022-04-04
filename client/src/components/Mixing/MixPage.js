import './MixPage.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import confetti from "canvas-confetti";
import IngredientCard from '../IngredientCard/IngedientCard';
import { animateScroll as ScrollAction } from 'react-scroll';
import DrinkModal from '../Modals/DrinkModal/DrinkModal';


export default function MixPage({ user, ingredients, setIngredients, showDrinkModal, setShowDrinkModal, selectedDrink, setSelectedDrink, scrollTopMix, showProfileModal, matchFound, setMatchFound, mixToCreate, setMixToCreate, showMixModal, setShowMixModal }) {
    let [selectedCategory, setSelectedCategory] = useState('ALL')
    let [mixes, setMixes] = useState({
        "mix": [
        ]
    });

    let filteredIngredients = ingredients.filter(ingredient=>ingredient.ingredient_type===selectedCategory.toLowerCase() || selectedCategory==='ALL').sort((ingred1, ingred2) => ingred1.name.localeCompare(ingred2.name))

    let sortedMix = mixes.mix.sort((recipe1, recipe2) => {
        return parseInt(recipe1["ingredient_id"]) - parseInt(recipe2["ingredient_id"])
    })

    let mixesToDisplay = sortedMix.map(mix => {
        return (
            <div key={mix["ingredient_id"]} className='mix-recipe'>{ingredients.filter(ingredient => ingredient.id == [mix["ingredient_id"]])[0].name}: {mix["parts"]}</div>
        )
    })

    // * categories
    let categories = ['ALL', 'ALCOHOL', 'LIQUID', 'SOLID']
    let categoriesToDisplay = categories.map(category => {
        let categoryClassName = selectedCategory === category ? 'mix-page-ingredients-type-tab selected' : 'mix-page-ingredients-type-tab'
        return (
            <div key={category} className={categoryClassName} onClick={handleClickTab}>{category}</div>
        )
    })

    function handleClickTab(e) {
        setSelectedCategory(e.target.textContent)
        console.log(e.target.textContent)
        console.log(filteredIngredients)
    }

    function handleClickArrow() {
        setSelectedCategory('ALL')
        resetIngredients();
        scrollTopMix();
    }

    function handleMixClick() {
        console.log(mixes.mix);
        if (mixes.mix.length <= 1) {
            alert("               MIX ERORR: \nPlease add more than one ingredient.")
        } else {
            axios.post('/mixstrict', mixes)
                .then(r => {
                    if (r.data === undefined) {
                        alert("No Match Found")
                        setMixToCreate({
                            "image_url": 'BlankGlass.png',
                            "recipes": mixes.mix
                        })
                        setShowMixModal(true)
                    } else {
                        console.log(r.data)
                        setSelectedDrink(r.data)
                        setShowDrinkModal(true)
                        celebrate();
                        setMatchFound(true);
                    }
                })
        }

    }

 

    function chunk(array, limit) {
        if (array.length <= limit) return [array];
        const perChunk = Math.ceil(array.length / Math.ceil(array.length / limit));
        return [array.slice(0, perChunk)].concat(chunk(array.slice(perChunk), limit));
      }

    let chunkIngredients = chunk(filteredIngredients,3);


    function displayIngredients(data) {
        return data.map(row=>{
            return(
                <React.Fragment>
                    {ingredientCardsRow(row)}
            </React.Fragment>
            )
        })
    }

    function ingredientCardsRow(data) {
        return <div className='mix-page-ingredients-cards-container'>
            {data.map(ingredient => {
                let oldPartsCount;
                let inMix= mixes.mix.find(ingred=>ingred.ingredient_id===ingredient.id)
                inMix!=undefined?oldPartsCount = inMix["parts"]:oldPartsCount = 0;

                return (<IngredientCard
                    ingredient={ingredient}
                    key={ingredient.id}
                    mixes={mixes}
                    setMixes={setMixes}
                    oldPartsCount={oldPartsCount}
                />)
            })}
        </div>
    }

    function resetIngredients() {
        setMixes({
            "mix": [
            ]
        })
        setIngredients([])
        axios.get('/ingredients')
            .then(r => {
                setSelectedCategory('ALL')
                setIngredients(r.data)
            })
    }

    let titleClass = mixes.mix.length == 0 || showDrinkModal || showProfileModal || showMixModal ? 'mix-page-title-off' : 'mix-page-title'
    let buttonClass = mixes.mix.length == 0 || showDrinkModal || showProfileModal || showMixModal ? 'go-home-mix-page-button-nolight' : 'go-home-mix-page-button'

    let count = 200;
    let defaults = {
        origin: { y: 0.9 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    function celebrate() {
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

    //! ADD RECIPE TITLE AT THE TOP OF THE JUG CONTAINER WITH HR TO DISPLAY RECIPES
    return (
        <React.Fragment>
            <div style={{ marginTop: '22.5%' }}></div>
            <div className='mix-page-wrapper'>
                <div className={titleClass}>mixing</div>
                <div className={buttonClass} onClick={handleClickArrow}>↑</div>
            </div>
            <div className='mix-page-items-wrapper'>
                <div className='mix-page-jug-container'>
                <div className='mix-recipe-title'>RECIPE:</div>
                    <div className='mix-recipes-wrapper'>
                        {mixesToDisplay}
                    </div>
                    <button className='mix-button' onClick={handleMixClick}>MIX</button>
                    <button className='reset-mix' onClick={resetIngredients}>RESET</button>
                </div>
                <div className='mix-page-ingredients-container'>
                    <div className='mix-page-ingredients-tab-holders'>
                        {categoriesToDisplay}
                    </div>
                    <div className='mix-page-ingredients-holder' id='cards'>
                        {displayIngredients(chunkIngredients)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}