import React from "react";
import '../Modal.css';
import './ProfileModal.css';

export default function ProfileModal({profile,setShowProfileModal}){
    const images = require.context('../../../img/users',true);

    // let recipesToDisplay = profile.recipes.map(recipe=>{
    //     return(
    //         <div key={recipe.ingredient.id} className="modal-profile-recipe"><b>{recipe.ingredient.name}</b>: {recipe.parts}</div>
    //     )
    // })

    function handleClickCloseButton(){
        setShowProfileModal(false);
    }

    let profileNameClass= profile.first_name?'modal-profile-name long':'modal-profile-name'

    return(
            <div className="modal-card">
                <div className="modal-top"> 
                    <div className="modal-left"> 
                        <img src={images('./'+profile.image_url)} className="modal-profile-image"/>
                    </div>
                    <div className="modal-right">   
                        <div className={profileNameClass}>{profile.first_name} {profile.last_name}</div>
                        <hr></hr>
                        <div className="modal-profile-details"><l>Email:</l> {profile.username}</div>
                        <div className="modal-profile-details"><l>Bio:</l> {profile.description}</div>
                        {/* <div className="modal-profile-recipe-wrapper">
                            {recipesToDisplay}
                        </div> */}
                    </div>
                </div>
                <div className="modal-bot"> 
                    <button className="favorite-button">BUTTON</button>
                    <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
                </div>
            </div>
    )
}