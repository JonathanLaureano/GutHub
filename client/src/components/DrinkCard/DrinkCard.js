import React from "react";
import './DrinkCard.css';

export default function DrinkCard({drink}){
    const images = require.context('../Images-Resized',true);

    let imgClass = drink.name=='Margarita'?'drink-card-image margarita':'drink-card-image'

    let imgClass2;

    switch (drink.name) {
        case "Margarita":
            imgClass2='drink-card-image margarita'
            break;
        case "Bloody Mary":
            imgClass2='drink-card-image bloodymary'
            break;
        case 'Caipirinha':
            imgClass2='drink-card-image caipirinha'
            break;
        case 'Old Fashioned':
            imgClass2='drink-card-image oldfashioned'
        default:
            imgClass2='drink-card-image'
            
    }
    
    return(
        <React.Fragment>
            <div className="drink-card-container">
                <img className={imgClass2} src={images('./'+drink.image_url)}/>
                <div className="drink-card-text-info">
                    <div className="drink-card-name">{drink.name}</div>
                    <div className="drink-card-ingredient">{drink.recipes[0].ingredient.name}</div>
                </div>
            </div>
        </React.Fragment>
    )
}