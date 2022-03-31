import React from "react";
import '../Modal.css';
import './MixMatchModal.css';

export default function MixMatchModal({mix}){
    const images = require.context('../../Images-Resized',true);

    let recipesToDisplay = mix.recipes.map(recipe=>{
        return(
            <div className="modal-drink-recipe"><b>{recipe.ingredient.name}</b>: {recipe.parts}</div>
        )
    })

    return(
            <div className="modal-card">
                <div className="modal-top"> 
                    <div className="modal-left"> 
                        <img src={images('./'+mix.image_url)} className="modal-drink-image"/>
                    </div>
                    <div className="modal-right">   
                        <div className="modal-drink-name">{mix.name}</div>
                        <hr></hr>
                        <div className="modal-drink-recipe-title">Recipe: </div>
                        <div className="modal-drink-recipe-wrapper">
                            {recipesToDisplay}
                        </div>
                    </div>
                </div>
                <div className="modal-bot"> 
                    <button className="favorite-button">FAVORITE DRINK</button>
                    <button className="close-button">CLOSE</button>
                </div>
            </div>
    )
}