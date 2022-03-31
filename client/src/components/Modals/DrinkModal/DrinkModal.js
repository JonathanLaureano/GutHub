import React from "react";
import '../Modal.css';
import './DrinkModal.css';

export default function DrinkModal({drink,setShowDrinkModal}){
    const images = require.context('../../Images-Resized',true);

    let recipesToDisplay = drink.recipes.map(recipe=>{
        return(
            <div className="modal-drink-recipe"><b>{recipe.ingredient.name}</b>: {recipe.parts}</div>
        )
    })

    function handleClickCloseButton(){
        setShowDrinkModal(false);
    }

    return(
            <div className="modal-card">
                <div className="modal-top"> 
                    <div className="modal-left"> 
                        <img src={images('./'+drink.image_url)} className="modal-drink-image"/>
                    </div>
                    <div className="modal-right">   
                        <div className="modal-drink-name">{drink.name}</div>
                        <hr></hr>
                        <div className="modal-drink-recipe-title">Recipe: </div>
                        <div className="modal-drink-recipe-wrapper">
                            {recipesToDisplay}
                        </div>
                    </div>
                </div>
                <div className="modal-bot"> 
                    <button className="favorite-button">FAVORITE DRINK</button>
                    <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
                </div>
            </div>
    )
}