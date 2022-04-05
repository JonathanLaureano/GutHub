import React, { useState } from "react";
import './IngredientCard.css';

export default function IngredientCard({ ingredient, mixes, setMixes, oldPartsCount,totalPartsCount,setTotalPartsCount}) {
    let [partsCount, setPartsCount] = useState(oldPartsCount);
    const images = require.context('../../img/ingredients', true);


    function truncateDecimals(num, digits) {
        let numS = num.toString(),
            decPos = numS.indexOf('.'),
            substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
            trimmedResult = numS.substr(0, substrLength),
            finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

        return parseFloat(finalResult);
    }


    let imgClass;

    switch (ingredient.name) {
        case "Gin":
            imgClass = 'ingredient-card-image gin'
            break;
        // case "Whiskey":
        //     imgClass = 'ingredient-card-image whiskey'
        //     break;
        // case "Brandy":
        //     imgClass = 'ingredient-card-image brandy'
        //     break;
        // case 'Pineapple Juice':
        // case 'Almond Liquer':
        // case 'Wine':
        // case 'White Rum':
        // case 'Scotch':
        // case 'Champagne':
        // case 'Grenadine':
        // case 'Coke':
        // case 'Tonic':
        // case 'Simple Syrup':
        // case 'Worcestershire Sauce':
        // case 'Tobasco Sauce':
        // case 'Bitter':
        // case 'Cinnamon Stick':
        // case 'Olive':
        // case 'Lime Juice':
        // case 'Lemon Juice':
        // case 'Almond Liquer':
        //     imgClass = 'ingredient-card-image almondliquer'
        //     break;
        case 'Coconut Cream':
        case "Nutmeg":
            imgClass = 'ingredient-card-image nutmeg'
            break;
        case 'Milk':
            imgClass = 'ingredient-card-image milk'
            break;
        case 'Vodka':
            imgClass = 'ingredient-card-image vodka'
            break;
        case 'Mint Leaves':
            imgClass = 'ingredient-card-image mint'
            break;
        // case 'Raspberry':
        // case 'Lime':
        //     imgClass = 'ingredient-card-image Lime'
        //     break;
        // case 'Horse Radish':
        // case 'Paprika':
        //     imgClass = 'ingredient-card-image paprika'
        //     break;
        // case 'Salt':
        //     imgClass = 'ingredient-card-image salt'
        //     break;
        // case 'Sugar':
        // case 'Tomato Juice':
        //     imgClass = 'ingredient-card-image Tomato'
        //     break;
        // case 'Capelletti Aperitif':
        //     imgClass = 'ingredient-card-image capelletti'
        //     break;
        case 'Dragonfruit':
            imgClass = 'ingredient-card-image dragonfruit'
            break;

        default:
            imgClass = 'ingredient-card-image'
    }

    function handleAddUpdatePartsCount(num) {
        let isFloat = partsCount.toString().indexOf('.') != -1;
        if (isFloat) {
            setPartsCount(Math.ceil(partsCount))      
            setTotalPartsCount(totalPartsCount+(Math.ceil(partsCount)-partsCount))
            let ingredientRecipe = { "ingredient_id": ingredient.id, "parts": Math.ceil(partsCount) }
            if (mixes.mix.length > 0) {
                let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                let updatedMix = [...filteredMix, ingredientRecipe];
                let newMixes = { "mix": updatedMix }
                setMixes(newMixes)
            } else {
                let updatedMix = [...mixes.mix, ingredientRecipe];
                let newMixes = { "mix": updatedMix }
                setMixes(newMixes)
            }
        }
        else {
            if (partsCount < num) {
                setPartsCount(partsCount += 1)
                setTotalPartsCount(totalPartsCount+=1)
                let ingredientRecipe = { "ingredient_id": ingredient.id, "parts": partsCount }
                if (mixes.mix.length > 0) {
                    let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                    let updatedMix = [...filteredMix, ingredientRecipe];
                    let newMixes = { "mix": updatedMix }
                    setMixes(newMixes)
                } else {
                    let updatedMix = [...mixes.mix, ingredientRecipe];
                    let newMixes = { "mix": updatedMix }
                    setMixes(newMixes)
                }
            }
        }
    }

    function addClick() {
        if (ingredient.ingredient_type != 'Solid') {
            handleAddUpdatePartsCount(5)
        } else {
            handleAddUpdatePartsCount(1)
        }
    }


    function subtractClick() {
        let isFloat = partsCount.toString().indexOf('.') != -1;
        if (isFloat) {
            if (partsCount < 1 && partsCount > 0) {
                setPartsCount(0)
                setTotalPartsCount(totalPartsCount-partsCount)
                let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                let newMixes = { "mix": filteredMix }
                setMixes(newMixes)
            }
            else {
                setPartsCount(Math.floor(partsCount))
                setTotalPartsCount(totalPartsCount-(partsCount-Math.floor(partsCount)))
                let ingredientRecipe = { "ingredient_id": ingredient.id, "parts": Math.floor(partsCount) }
                if (mixes.mix.length > 0) {
                    let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                    let updatedMix = [...filteredMix, ingredientRecipe];
                    let newMixes = { "mix": updatedMix }
                    setMixes(newMixes)
                } else {
                    let updatedMix = [...mixes.mix, ingredientRecipe];
                    let newMixes = { "mix": updatedMix }
                    setMixes(newMixes)
                }
            }
        }
        else {
            if (partsCount > 1) {
                setPartsCount(partsCount -= 1)
                setTotalPartsCount(totalPartsCount-1)
                let ingredientRecipe = { "ingredient_id": ingredient.id, "parts": partsCount }
                if (mixes.mix.length > 0) {
                    let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                    let updatedMix = [...filteredMix, ingredientRecipe];
                    let newMixes = { "mix": updatedMix }
                    setMixes(newMixes)
                } else {
                    let updatedMix = [...mixes.mix, ingredientRecipe];
                    let newMixes = { "mix": updatedMix }
                    setMixes(newMixes)
                }
            }
            else if (partsCount == 1) {
                setPartsCount(partsCount -= 1)
                setTotalPartsCount(totalPartsCount-1)
                let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                let newMixes = { "mix": filteredMix }
                setMixes(newMixes)
            }
        }
    }

    function handleUpdatePartsCountOnInput(e) {
        let newValue = e.target.value;
        if (newValue.toString().indexOf('.') != -1) {
            setTotalPartsCount(totalPartsCount-(partsCount-newValue))
            setPartsCount(newValue);
            let ingredientRecipe = { "ingredient_id": ingredient.id, "parts": truncateDecimals(parseFloat(newValue), 2) }
            if (mixes.mix.length > 0) {
                let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                let updatedMix = [...filteredMix, ingredientRecipe];
                let newMixes = { "mix": updatedMix }
                setMixes(newMixes)
            } else {
                let updatedMix = [...mixes.mix, ingredientRecipe];
                let newMixes = { "mix": updatedMix }
                setMixes(newMixes)
            }
        } else {
            setPartsCount(parseInt(newValue));
            let ingredientRecipe = { "ingredient_id": ingredient.id, "parts": parseInt(newValue) }
            if (mixes.mix.length > 0) {
                // setTotalPartsCount(totalPartsCount-(partsCount-newValue))
                let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                let updatedMix = [...filteredMix, ingredientRecipe];
                let newMixes = { "mix": updatedMix }
                setMixes(newMixes)
            } else {
                let updatedMix = [...mixes.mix, ingredientRecipe];
                let newMixes = { "mix": updatedMix }
                setMixes(newMixes)
            }
        }
    }

    function handleOffFocusClick(e) {
        if (ingredient.ingredient_type === 'Solid') {
            setPartsCount(parseInt(1));
            let ingredientRecipe = { "ingredient_id": ingredient.id, "parts": 1 }
            let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
            let updatedMix = [...filteredMix, ingredientRecipe];
            let newMixes = { "mix": updatedMix }
            setMixes(newMixes)
        } else {
            let newValue = e.target.value;
            if (newValue > 5) {
                setPartsCount(parseInt(5));
                let ingredientRecipe = { "ingredient_id": ingredient.id, "parts": 5 }
                let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                let updatedMix = [...filteredMix, ingredientRecipe];
                let newMixes = { "mix": updatedMix }
                setMixes(newMixes)
            }
            else if (newValue === '') {
                setPartsCount(0);
                let filteredMix = mixes.mix.filter(mix => mix["ingredient_id"] != ingredient.id)
                let newMixes = { "mix": filteredMix }
                setMixes(newMixes)
            } else if (newValue.toString().indexOf('.') != -1) {
                setPartsCount(truncateDecimals(parseFloat(newValue), 2));
            }
        }
    }

    let inputClass;
    if (ingredient.ingredient_type != 'Solid') {
        if (partsCount === 5) {
            inputClass = 'count-input-max';
        } else if (partsCount > 0) {
            inputClass = 'count-input-active';
        } else {
            inputClass = 'count-input'
        }
    } else {
        if (partsCount === 1) {
            inputClass = 'count-input-max';
        } else {
            inputClass = 'count-input';
        }
    }

    let containerClass = partsCount != 0 ? 'ingredient-card-container-active' : 'ingredient-card-container'

    return (
        <React.Fragment>
            <div id={ingredient.d} className={containerClass}>
                <img className={imgClass} src={images('./' + ingredient.image_url)} />
                <div className="ingredient-card-text-info">
                    <div className="ingredient-card-name">{ingredient.name}</div>
                    <div className="ingredient-card-partsCount">
                        <img className="subtract" src='https://img.icons8.com/fluency/48/000000/do-not-disturb.png' onClick={subtractClick} />
                        <input onBlur={handleOffFocusClick} className={inputClass} value={partsCount} onChange={handleUpdatePartsCountOnInput} type='number' min='0' max='5'></input>
                        <img className="add" src='https://img.icons8.com/fluency/48/000000/add.png' onClick={addClick} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}