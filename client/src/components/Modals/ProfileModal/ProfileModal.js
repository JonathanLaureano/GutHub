import React from "react";
import '../Modal.css';
import './ProfileModal.css';

export default function ProfileModal({ profile, setShowProfileModal }) {
    const users = require.context('../../../img/users', true);
    const drinks = require.context('../../../img/drinks', true);

    function handleClickCloseButton() {
        setShowProfileModal(false);
    }

    let createdDrinksToDisplay = profile.drinks.map(drink => {
        return (
            <img className='modal-mini-drink-image' src={drinks('./' + drink.image_url)} />
        )
    })
    let profileNameClass = profile.first_name ? 'modal-profile-name long' : 'modal-profile-name'

    return (
        <div className="modal-card">
            <div className="modal-top">
                <div className="modal-left">
                    <img src={users('./' + profile.image_url)} className="modal-profile-image" />
                </div>
                <div className="modal-right">
                    <div className={profileNameClass}>{profile.first_name} {profile.last_name}</div>
                    <hr></hr>
                    <div className="modal-profile-details"> <b>Email:</b> {profile.username}</div>
                    <div className="modal-profile-details"> <b>Bio:</b> {profile.description}</div>
                    <div className='modal-profile-drinks-list-title'>Favorites:</div>
                    <div className='modal-profile-cards-wrapper'>
                        {createdDrinksToDisplay}
                    </div>
                    <div className='modal-profile-drinks-list-title'>Created:</div>
                    <div className='modal-profile-cards-wrapper'>
                        {createdDrinksToDisplay}
                    </div>
                </div>
            </div>
            <div className="modal-bot">
                <button className="favorite-button">EDIT</button>
                <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
            </div>
        </div>
    )
}