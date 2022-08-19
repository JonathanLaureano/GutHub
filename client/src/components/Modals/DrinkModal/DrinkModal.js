import React from "react";
import '../Modal.css';
import './DrinkModal.css';

export default function DrinkModal({ user, drink, setShowDrinkModal, setMatchFound, handleFavoriteDrink, handleUnfavoriteDrink, favorites, setFavorites, ingredients }) {
    const drinks = require.context('../../../img/drinks', true);
    const ingredientImgs = require.context('../../../img/ingredients', true);

    let recipesToDisplay = drink.recipes.map(recipe => {
        return (
            <div className='mix-recipe-identity'>
                <div className='mix-recipe-nameandcount'>
                    <img className='mix-recipe-image' src={ingredientImgs('./' + recipe.ingredient.image_url)} />
                    <div className='mix-recipe'><b>~</b>{recipe.ingredient.name}:</div>
                    <div className='mix-recipe-partsCount'><b>~</b>{recipe.parts}</div>
                </div>
            </div>
        )
    })

    function handleClickCloseButton() {
        setShowDrinkModal(false);
        setMatchFound(false);
    }

    function handleClickFavoriteButton() {
        handleFavoriteDrink(drink)
        setFavorites([...favorites, drink.id])
    }

    function handleClickUnfavoriteButton() {
        handleUnfavoriteDrink(drink)
        setFavorites(favorites.filter(fav => fav != drink.id))
    }

    let inFavorites = favorites !== [] ? favorites.includes(drink.id) : false
    let drinkNameClass = drink.name.length > 15 ? 'modal-drink-name long' : 'modal-drink-name'

    let isCreatedDrink = drink.user.id != 1 && drink.user.id != 2

    return (
        <div className="modal-card">
            <div className="modal-top">
                <div className="modal-left">
                    <img src={drinks('./' + drink.image_url)} className="modal-drink-image" />
                    {isCreatedDrink ? <div className="modal-drink-credits"><label>Created By: </label>{drink.user.first_name} {drink.user.last_name}</div> : null}
                </div>
                <div className="modal-right">
                    <div className={drinkNameClass}>{drink.name}</div>
                    <hr></hr>
                    <div className="modal-drink-recipe-title">Recipe: </div>
                    <div className="modal-drink-recipe-wrapper">
                        {recipesToDisplay}
                    </div>
                </div>
            </div>
            <div className="modal-bot">
                {inFavorites ? <button className="unfavorite-button" onClick={handleClickUnfavoriteButton} >UNFAVORITE DRINK</button> : <button className="favorite-button" onClick={handleClickFavoriteButton} >FAVORITE DRINK</button>}
                <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
            </div>
        </div>
    )
}