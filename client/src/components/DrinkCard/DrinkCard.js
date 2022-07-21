import React from "react";
import './DrinkCard.css';

export default function DrinkCard({ drink, setShowDrinkModal, setSelectedDrink, cardClass }) {
    const images = require.context('../../img/drinks', true);

    function handleClickCard() {
        setSelectedDrink(drink);
        setShowDrinkModal(true);
    }

    return (
        <React.Fragment>
            <div className={cardClass} onClick={handleClickCard}>
                <img className='drink-card-image' src={images('./' + drink.image_url)} />
                <div className="drink-card-text-info">
                    <div className="drink-card-name">{drink.name}</div>
                    <div className="drink-card-ingredient">{drink.recipes[0].ingredient.name}</div>
                </div>
            </div>
        </React.Fragment>
    )
}