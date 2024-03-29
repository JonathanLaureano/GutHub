import './MixPage.css';
import React, { useState } from 'react'
import axios from 'axios';
import confetti from "canvas-confetti";
import IngredientCard from '../IngredientCard/IngedientCard';


export default function MixPage({ mixes, setMixes, user, ingredients, setIngredients, showDrinkModal, setShowDrinkModal, selectedDrink, setSelectedDrink, scrollTopMix, showProfileModal, matchFound, setMatchFound, mixToCreate, setMixToCreate, showMixModal, setShowMixModal, modalActive, setShowResultsModal, showResultsModal, mixResults, setMixResults, showInformationModal, setShowInformationModal }) {
    const images = require.context('../../img/ingredients', true);
    let [selectedCategory, setSelectedCategory] = useState('ALL')
    let [mixType, setMixType] = useState('RELATIVE');
    let [totalPartCount, setTotalPartsCount] = useState(0);

    let filteredIngredients = ingredients.filter(ingredient => ingredient.ingredient_type === selectedCategory.toLowerCase() || selectedCategory === 'ALL').sort((ingred1, ingred2) => ingred1.name.localeCompare(ingred2.name))

    let sortedMix = mixes.mix.sort((recipe1, recipe2) => {
        let recipe1Name = ingredients.filter(ingredient => ingredient.id == [recipe1["ingredient_id"]])[0].name;
        let recipe2Name = ingredients.filter(ingredient => ingredient.id == [recipe2["ingredient_id"]])[0].name
        return recipe1Name.localeCompare(recipe2Name);
    })

    let mixesToDisplay = sortedMix.map(mix => {
        let fullIngredient = ingredients.filter(ingredient => ingredient.id == [mix["ingredient_id"]])[0]
        return (
            <div className='mix-recipe-identity'>
                <div className='mix-recipe-nameandcount'>
                <img className='mix-recipe-image' src={images('./' + fullIngredient.image_url)} />
                    <div key={mix["ingredient_id"]} className='mix-recipe'><b>~</b>{fullIngredient.name}: </div>
                    <div className='mix-recipe-partsCount'><b>~</b>{mix["parts"]}</div>
                </div>
            </div>
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
    }

    function handleClickArrow() {
        setSelectedCategory('ALL')
        resetIngredients();
        scrollTopMix();
    }

    function handleClickQuestion(){
        setShowInformationModal(true)
    }

    function handleMixClick() {
        switch (mixType) {
            case 'STRICT':
                if (mixes.mix.length <= 1) {
                    alert("MIX ERROR: \nPlease add more than one ingredient.")
                } else {
                    axios.post('/mixstrict', mixes)
                        .then(r => {
                            if (r.data === null) {
                                alert("No Match Found")
                                setMixToCreate({
                                    "image_url": 'BlankGlass.png',
                                    "recipes": mixes.mix
                                })
                                setShowMixModal(true)
                            } else {
                                setSelectedDrink(r.data)
                                setShowDrinkModal(true)
                                celebrate();
                                setMatchFound(true);
                            }
                        })
                }
                break
            case 'RELATIVE':

                    axios.post('/mixrelative', mixes)
                        .then(r => {
                            if (r.data.length === 0) {
                                alert("No Match Found")
                                setMixToCreate({
                                    "image_url": 'BlankGlass.png',
                                    "recipes": mixes.mix
                                })
                                setShowMixModal(true)
                            } else if (r.data.length === 1) {
                                setSelectedDrink(r.data[0])
                                setShowDrinkModal(true)
                                celebrate();
                                setMatchFound(true);
                            } else {
                                setMixResults(r.data)
                                setShowResultsModal(true)
                                setMatchFound(true);

                            }
                        })

                break


        }

    }



    function chunk(array, limit) {
        if (array.length <= limit) return [array];
        const perChunk = Math.ceil(array.length / Math.ceil(array.length / limit));
        return [array.slice(0, perChunk)].concat(chunk(array.slice(perChunk), limit));
    }

    let chunkIngredients = chunk(filteredIngredients, 3);


    function displayIngredients(data) {
        return data.map(row => {
            return (
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
                let inMix = mixes.mix.find(ingred => ingred.ingredient_id === ingredient.id)
                inMix != undefined ? oldPartsCount = inMix["parts"] : oldPartsCount = 0;

                return (<IngredientCard
                    ingredient={ingredient}
                    key={ingredient.id}
                    mixes={mixes}
                    setMixes={setMixes}
                    oldPartsCount={oldPartsCount}
                    totalPartsCount={totalPartCount}
                    setTotalPartsCount={setTotalPartsCount}
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
        setTotalPartsCount(0)
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

    function handleSwitchButtonRelative() {
        setMixType('STRICT')
    }

    function handleSwitchButtonStrict() {
        setMixType('RELATIVE')
    }

    let titleClass = mixes.mix.length == 0 || modalActive ? 'mix-page-title-off' : 'mix-page-title'
    let buttonClass = mixes.mix.length == 0 || modalActive ? 'go-home-mix-page-button-nolight' : 'go-home-mix-page-button'

    let totalPartsCountClass = totalPartCount == 11 ? 'mix-recipe-partsCount-total max':'mix-recipe-partsCount-total'


    return (
        <React.Fragment>
            <div style={{ marginTop: '22.5%' }}></div>
            <div className='mix-page-wrapper'>
                <div className={buttonClass} onClick={handleClickQuestion}>?</div>
                <div className={titleClass}>mixing</div>
                <div className={buttonClass} onClick={handleClickArrow}>↑</div>
            </div>
            <div className='mix-page-items-wrapper'>
                <div className='mix-page-jug-container'>
                    <div className='mix-recipe-title'>RECIPE:</div>
                    <div className='mix-recipes-wrapper'>
                        {mixesToDisplay}
                    </div>
                    <div className='mix-recipe-identity-total'>
                            <div className='mix-recipe-total'>Total: </div>
                            <div className={totalPartsCountClass}> {totalPartCount}</div>
                    </div>
                    <div className='button-wrappers'>
                        <button className='mix-button' onClick={handleMixClick}>MIX</button>
                        <div className='reset-switch-wrapper'>
                            {mixType === 'RELATIVE' ? <button className='switch-mix relative' onClick={handleSwitchButtonRelative}>RELATIVE</button> : <button className='switch-mix strict' onClick={handleSwitchButtonStrict}>STRICT</button>}
                            <button className='reset-mix' onClick={resetIngredients}>RESET</button>
                        </div>
                    </div>
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