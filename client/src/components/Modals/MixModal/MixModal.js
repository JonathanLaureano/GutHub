import React, { useState } from "react";
import '../Modal.css';
import './MixModal.css';

export default function MixModal({ user, drink, setShowMixModal, setMatchFound, ingredients, handleCreateDrinkSubmit }) {
    const drinkImgs = require.context('../../../img/drinks', true);
    const ingredientImgs = require.context('../../../img/ingredients', true);

    let [drinkName, setDrinkName] = useState('')

    function handleDrinkNameChange(e) {
        setDrinkName(cleanString(e.target.value));
    }

    function cleanString(str) {
        return str.replace(/[^a-zA-Z\d\s:\u00C0-\u00FF]/g, '')
          .split('')
          .join('')
      }
    

    let recipesToDisplay = drink.recipes.map(recipe => {
        let fullIngredient = ingredients.filter(ingredient => ingredient.id == [recipe["ingredient_id"]])[0]
        return (
            <div className='mix-recipe-identity'>
                <div className='mix-recipe-nameandcount'>
                    <img className='mix-recipe-image' src={ingredientImgs('./' + fullIngredient.image_url)} />
                    <div className='mix-recipe'><b>~</b>{fullIngredient.name}: </div>
                    <div className='mix-recipe-partsCount'><b>~</b>{recipe.parts}</div>
                </div>
            </div>
        )

    })

    function handleClickCloseButton() {
        setShowMixModal(false);
        setMatchFound(false);
    }

    let doNotUseNames = ['drink','name','a','b','asdf','fdsa','qwert','new','newdrink']

    function handleClickCreate() {
        if (drinkName === '') {
            alert('Please enter a drink name.')
        } else if (doNotUseNames.includes(drinkName.toLowerCase())) {
            alert('Please enter a different name.')
        } else {
            let newDrink = {
                ...drink,
                "name": drinkName
            }
            handleCreateDrinkSubmit(newDrink)
        }
    }

    return (
        <div className="modal-card">
            <div className="modal-top">
                <div className="modal-left">
                    <img alt={drink.name} src={drinkImgs('./' + drink.image_url)} className="modal-drink-image" />
                </div>
                <div className="modal-right">
                    <input type='text' placeholder='Enter A Drink Name' value={drinkName} onChange={handleDrinkNameChange} className='mix-modal-input'></input>
                    <hr></hr>
                    <div className="modal-drink-recipe-title">Recipe: </div>
                    <div className="modal-drink-recipe-wrapper">
                        {recipesToDisplay}
                    </div>
                </div>
            </div>
            <div className="modal-bot">
                <button className="favorite-button" onClick={handleClickCreate}>CREATE DRINK</button>
                <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
            </div>
        </div>
    )
}