import React from "react";
import './IngredientCard.css';

export default function IngredientCard({ingredient}){
    return(
        <React.Fragment>
            <div className="ingredient-card-container">
                <img className='ingredient-card-image' src={ingredient.image_url}/>
                <div className="ingredient-card-text-info">
                    <div className="ingredient-card-name">{ingredient.name}</div>
                </div>
            </div>
        </React.Fragment>
    )
}