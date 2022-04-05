import React from "react";
import '../Modal.css';
import './ResultsModal.css';

export default function ResultsModal({ mixes, showResultsModal, setShowResultsModal, ingredients, mixResults, setSelectedDrink, setShowDrinkModal, handleFavoriteDrink, handleUnfavoriteDrink, favorites, setFavorites }) {
    const drinkImages = require.context('../../../img/drinks', true);
    const ingredImages = require.context('../../../img/ingredients', true);


    function handleClickCloseButton() {
        setShowResultsModal(false);
    }

    function handleClickFavoriteButton(drink) {
        handleFavoriteDrink(drink)
        setFavorites([...favorites, drink.id])
    }

    function handleClickUnfavoriteButton(drink) {
        handleUnfavoriteDrink(drink)
        setFavorites(favorites.filter(fav => fav !== drink.id))
    }

    function handleClickViewButton(drink) {
        setSelectedDrink(drink);
        setShowDrinkModal(true);
        setShowResultsModal(false);
    }

    function handleFavoriteAllButton(data) {
        // ! NEED TO FINISH THIS
        // ! REACT DOES NOT LIKE THE NUMBER OF STATES BEING UPDATED HERE
        // data.map(drink=>{
        //     handleFavoriteDrink(drink)
        //     setFavorites([...favorites, drink.id])    
        // })
    }


    let mixIngredients = mixes.mix;

    function displayIngredients(data) {
        return <div className='mix-page-ingredients-cards-container result-modal'>
            {data.map(mixIngredient => {
                let fullIngredient = ingredients.filter(ingredient => ingredient.id === [mixIngredient["ingredient_id"]])[0]
                return (
                    <div id={fullIngredient.id} className='resultModal-ingredient-container'>
                        <img className='resultModal-ingredient-image' alt={fullIngredient.name} src={ingredImages('./' + fullIngredient.image_url)} />
                        <div className="resultModal-ingredient-text-info">
                            <div className="resultModal-ingredient-name">{fullIngredient.name}</div>
                            <div className="resultModal-ingredient-partsCount">
                            </div>
                        </div>
                    </div>
                )
            })

            }
        </div>
    }

    function displayDrinks(data) {
        return data.map(drink => {
            let inFavorites = favorites !== undefined ? favorites.includes(drink.id) : false
            return (
                <div className="resultModal-drink-container">
                    <img className='resultModal-drink-image' alt={drink.name} src={drinkImages('./' + drink.image_url)} />
                    <div className='resultModal-drink-name'>{drink.name}</div>
                    <button className='resultModal-view-button' onClick={() => handleClickViewButton(drink)}>VIEW</button>
                    {inFavorites ? <button className='resultModal-unfavorite-button' onClick={() => handleClickUnfavoriteButton(drink)}>UNFAVORITE</button> : <button className='resultModal-favorite-button' onClick={() => handleClickFavoriteButton(drink)}>FAVORITE</button>}
                </div>
            )
        })
    }


    return (
        <div className="modal-card">
            <div className="modal-top">
                <div className="modal-left">
                    <div className='resultModal-ingredients-title'>INGREDIENTS</div>
                    <div className='resultModal-ingredients-wrapper' id='cards'>
                        {displayIngredients(mixIngredients)}
                    </div>
                </div>

                <div className="modal-right">
                    <div className='resultModal-drinks-title'>DRINKS</div>
                    <div className='resultModal-drinks-wrapper'>
                        {displayDrinks(mixResults)}
                    </div>

                </div>
            </div>
            <div className="modal-bot">
                <button className="favorite-all-button" onClick={handleFavoriteAllButton(mixResults)}>FAVORITE ALL DRINKS</button>
                <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
            </div>
        </div>
    )
}