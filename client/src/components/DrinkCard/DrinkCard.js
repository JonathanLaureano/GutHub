import React from "react";
import './DrinkCard.css';

export default function DrinkCard({drink}){
    const images = require.context('../Images-Resized',true);
    let imgClass;

    switch (drink.name) {
        case "Margarita":
            imgClass='drink-card-image margarita'
            break;
        case "Bloody Mary":
            imgClass='drink-card-image bloodymary'
            break;
        case 'Caipirinha':
            imgClass='drink-card-image caipirinha'
            break;
        case 'Old Fashioned':
            imgClass='drink-card-image oldfashioned'
            break;
        case 'Gin & Tonic':
            imgClass='drink-card-image gnt';
            break;
        case 'The Godfather':
            imgClass='drink-card-image godfather';
            break;
        default:
            imgClass='drink-card-image'
            
    }
    
    return(
        <React.Fragment>
            <div className="drink-card-container">
                <img className={imgClass} src={images('./'+drink.image_url)}/>
                <div className="drink-card-text-info">
                    <div className="drink-card-name">{drink.name}</div>
                    <div className="drink-card-ingredient">{drink.recipes[0].ingredient.name}</div>
                </div>
            </div>
        </React.Fragment>
    )
}