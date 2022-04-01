import axios from "axios";
import React, { useEffect,useState } from "react";
import '../Modal.css';
import './DrinkModal.css';

export default function DrinkModal({user,drink,setShowDrinkModal,setMatchFound,handleFavoriteDrink,handleUnfavoriteDrink}){
    console.log(drink)
    const images = require.context('../../../img/drinks',true);
    let [cardUser,setCardUser]=useState({})
    // let [inFavorites,setInFavorites] = useState(favoriteX!=undefined?favoriteX.includes(drink.id):false)
    let [favoriteX,setFavoritesX] = useState([])


    useEffect(()=>{
        axios.get('/me')
        .then(r=>{
            setCardUser(r.data)
            // setInFavorites(cardUser.favorites!=undefined?cardUser.favorites.includes(drink.id):false)
        })

        axios.get('/favorites')
        .then(r=>setFavoritesX(r.data))
    },[])

    let recipesToDisplay = drink.recipes.map(recipe=>{
        return(
            <div key={recipe.ingredient.id} className="modal-drink-recipe"><b>{recipe.ingredient.name}</b>: {recipe.parts}</div>
        )
    })

    function handleClickCloseButton(){
        setShowDrinkModal(false);
        setMatchFound(false);
    }

    function handleClickFavoriteButton(){
        handleFavoriteDrink(drink)
        setFavoritesX([...favoriteX,drink.id])
        // axios.get('/me')
        // .then(r=>{
        //     setCardUser(r.data)
        //     // setInFavorites(true)
        // })

    }

    function handleClickUnfavoriteButton(){
        handleUnfavoriteDrink(drink)
        setFavoritesX(favoriteX.filter(fav=>fav!=drink.id))

        // axios.get('/me')
        // .then(r=>{
        //     setCardUser(r.data)
        //     // setInFavorites(false)
        // })

    }

    let inFavorites = favoriteX!=undefined?favoriteX.includes(drink.id):false
    console.log(cardUser.favorites)
    let drinkNameClass= drink.name.length>15?'modal-drink-name long':'modal-drink-name'

    return(
            <div className="modal-card">
                <div className="modal-top"> 
                    <div className="modal-left"> 
                        <img src={images('./'+drink.image_url)} className="modal-drink-image"/>
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
                    {/* <button className="favorite-button" onClick={handleClickFavoriteButton} >FAVORITE DRINK</button> */}
                    {inFavorites?<button className="unfavorite-button" onClick={handleClickUnfavoriteButton} >UNFAVORITE DRINK</button>:<button className="favorite-button" onClick={handleClickFavoriteButton} >FAVORITE DRINK</button>}
                    <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
                </div>
            </div>
    )
}