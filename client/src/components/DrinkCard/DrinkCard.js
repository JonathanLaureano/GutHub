import React from "react";
import './DrinkCard.css';

export default function DrinkCard({drink}){
    return(
        <React.Fragment>
            <div className="drink-card-container">
                <img className='drink-card-image' src={'https://www.williamedwardshome.co.uk/images/detailed/4/Burnished_Gold_Tea_cup___Saucer_FootedCrop2.jpg'}/>
                <div className="drink-card-text-info">
                    <div className="drink-card-name">{drink.name}</div>
                    <div className="drink-card-ingredient">{drink.recipes[0].ingredient.name}</div>
                </div>
            </div>
        </React.Fragment>
    )
}