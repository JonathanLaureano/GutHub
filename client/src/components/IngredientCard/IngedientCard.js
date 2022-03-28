import React from "react";
import './IngredientCard.css';

export default function IngredientCard({ingredient}){
    return(
        <React.Fragment>
            <div className="ingredient-card-container">
                <img className='ingredient-card-image' src={'https://www.williamedwardshome.co.uk/images/detailed/4/Burnished_Gold_Tea_cup___Saucer_FootedCrop2.jpg'}/>
                <div className="ingredient-card-text-info">
                    <div className="ingredient-card-name">{drink.name}</div>
                </div>
            </div>
        </React.Fragment>
    )
}