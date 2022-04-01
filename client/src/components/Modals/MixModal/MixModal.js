import React, {useState} from "react";
import '../Modal.css';
import './MixModal.css';

export default function MixModal({user,drink,setShowMixModal,setMatchFound}){
    const images = require.context('../../../img/drinks',true);

    let [drinkName,setDrinkName] = useState('')

    function handleDrinkNameChange(e){
        setDrinkName(e.target.value);
    }

    let recipesToDisplay = drink.recipes.map(recipe=>{
        return(
            <div key={recipe.ingredient_id} className="modal-drink-recipe"><b>{recipe.ingredient_id}</b>: {recipe.parts}</div>
        )
    })

    function handleClickCloseButton(){
        setShowMixModal(false);
        setMatchFound(false);
    }

    return(
            <div className="modal-card">
                <div className="modal-top"> 
                    <div className="modal-left"> 
                        <img src={images('./'+drink.image_url)} className="modal-drink-image"/>
                    </div>
                    <div className="modal-right">   
                        <input type='text' className='mix-modal-input'>{drink.name}</input>
                        <hr></hr>
                        <div className="modal-drink-recipe-title">Recipe: </div>
                        <div className="modal-drink-recipe-wrapper">
                            {recipesToDisplay}
                        </div>
                    </div>
                </div>
                <div className="modal-bot"> 
                    <button className="favorite-button">CREATE DRINK</button>
                    <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
                </div>
            </div>
    )
}