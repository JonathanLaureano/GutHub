import axios from "axios";
import React,{useState} from "react";
import '../Modal.css';
import './ResultsModal.css';

export default function ResultsModal({mixes,showResultsModal,setShowResultsModal,ingredients}) {
    const drinkImgs = require.context('../../../img/drinks', true);
    const ingredImages = require.context('../../../img/ingredients', true);


    function handleClickCloseButton() {
        setShowResultsModal(false);
    }

    let mixIngredients = mixes.mix;

    function ingredientCardsRow(data) {
        return <div className='mix-page-ingredients-cards-container'>
            {data.map(mixIngredient => 
                {
                    let fullIngredient= ingredients.filter(ingredient => ingredient.id == [mixIngredient["ingredient_id"]])[0] 
                    console.log(fullIngredient)

                return (
                    <div id={fullIngredient.id} className='ingredient-card-container'>
                    <img className='ingredient-card-image' src={ingredImages('./' + fullIngredient.image_url)} />
                    <div className="ingredient-card-text-info">
                        <div className="ingredient-card-name">{fullIngredient.name}</div>
                        <div className="ingredient-card-partsCount">
                    </div>
                    </div>
                    </div>
                )
            })

            }
        </div>
    }


    return (
        <div className="modal-card">
            <div className="modal-top">
                <div className="modal-left">
                    {ingredientCardsRow(mixIngredients)}
                </div>
                <div className="modal-right">
                </div>
            </div>
            <div className="modal-bot">
                <button className="close-button" onClick={handleClickCloseButton}>Add All to Favorites</button>
                <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
            </div>
        </div>
    )
}