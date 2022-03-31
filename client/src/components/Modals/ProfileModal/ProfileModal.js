import React,{useState} from "react";
import '../Modal.css';
import './ProfileModal.css';

export default function ProfileModal({ profile, setShowProfileModal, handleLogOut }) {
    const users = require.context('../../../img/users', true);
    const drinks = require.context('../../../img/drinks', true);

    const [showEditMode,setShowEditMode] = useState(false)

    function clickEditButton(){
        setShowEditMode(!showEditMode)
    }

    function handleClickCloseButton() {
        setShowProfileModal(false);
    }

    function handleSubmitButton(){

    }

    let createdDrinksToDisplay = profile.drinks.map(drink => {
        return (
            <img className='modal-mini-drink-image' src={drinks('./' + drink.image_url)} />
        )
    })
    let profileNameClass = profile.first_name ? 'modal-profile-name long' : 'modal-profile-name';


    let editButtonClass = showEditMode? 'edit-button-active' : 'edit-button'

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
                {showEditMode?<div className='profile-edit-buttons'>
                    <button className={editButtonClass} onClick={clickEditButton}>CANCEL</button>
                    <button className='submit-profile-changes-button' onClick={handleSubmitButton}>SUBMIT</button>
                    </div>:
                    <button className={editButtonClass} onClick={clickEditButton}>EDIT</button>
                }
                {showEditMode?<button className="logout-button" onClick={handleLogOut}>LOG OUT</button>:<button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>}
            </div>
        </div>
    )
}