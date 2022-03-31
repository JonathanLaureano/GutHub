import React from "react";
import '../Modal.css';
import './MixMatchModal.css';

export default function MixMatchModal({mix}){
    const images = require.context('../../Images-Resized',true);

    // let recipesToDisplay = mix.recipes.map(recipe=>{
    //     return(
    //         <div className="modal-drink-recipe"> </div>
    //     )
    // })

    return(
            <div className="modal-card">
                <div className="modal-top"> 
                    <div className="modal-left"> 
                        <img src={images('./'+'PinkLady.png')} className="modal-drink-image"/>
                    </div>
                    <div className="modal-right">   
                        <div className="modal-drink-name">Pink Lady</div>
                        <hr></hr>
                        <div className="modal-drink-recipe-title">Recipe: </div>
                    </div>
                </div>
                <div className="modal-bot"> 
                    <button className="favorite-button">FAVORITE DRINK</button>
                    <button className="close-button">CLOSE</button>
                </div>
            </div>
    )
}