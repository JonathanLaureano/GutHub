import axios from "axios";
import React, { useState } from "react";
import '../Modal.css';
import './ProfileModal.css';

export default function ProfileModal({ profile, setUser, setShowProfileModal, handleLogOut, setSelectedDrink, setShowDrinkModal, drinks }) {
    const drinkImgs = require.context('../../../img/drinks', true);

    const [showEditMode, setShowEditMode] = useState(false)

    //inputs
    const [firstName, setFirstName] = useState(profile.first_name)
    const [lastName, setLastName] = useState(profile.last_name)
    const [email, setEmail] = useState(profile.username)
    const [imageLink, setImageLink] = useState('')
    const [password, setPassword] = useState('');

    function clickEditButton() {
        setPassword('');
        setShowEditMode(!showEditMode)
    }

    function handleClickCloseButton() {
        setShowProfileModal(false);
    }

    function handleClickMiniCard(drink) {
        setSelectedDrink(drink);
        setShowDrinkModal(true);
        setShowProfileModal(false);
    }

    function handleSubmitButton() {
        if (password === '') {
            setPassword('westworld')
        }

        if (email === '') {
            setEmail(profile.username)
        }

        if (firstName === '') {
            setFirstName(profile.first_name)
        }

        if (lastName === '') {
            setLastName(profile.last_name)
        }

        if (imageLink === '') {
            setImageLink(profile.imageLink)
        }

        let updatedProfile = {
            "first_name": firstName,
            "last_name": lastName,
            username: email,
            "password": password,
            "image_url": imageLink
        }

        axios.patch('/users/' + profile.id, updatedProfile)
            .then(r => {
                setUser(r.data)
                setShowEditMode(false)
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data.errors);
                    alert(error.response.data.errors)
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            });
    }

    let favoriteEmpty = profile.favorites.length === 0;

    let favoriteDrinksToDisplay = !favoriteEmpty ? profile.favorites.map(drink_id => {
        let drink = drinks[drink_id - 1]
        return (
            <div className='modal-mini-card-container'>
                <img alt={drink.name} className='modal-mini-drink-image' onClick={() => handleClickMiniCard(drink)} src={drinkImgs('./' + drink.image_url)} />
            </div>
        )
    }) : null;

    let createdEmpty = profile.drinks.length === 0;


    let createdDrinksToDisplay = !createdEmpty ? profile.drinks.map(drink => {
        let fullDrink = drinks[drink.id - 1]
        return (
            <div className='modal-mini-card-container'>
                <img alt={fullDrink.name} className='modal-mini-drink-image' onClick={() => handleClickMiniCard(fullDrink)} src={drinkImgs('./' + drink.image_url)} />
            </div>
        )
    }) : null;

    let profileNameClass = profile.first_name ? 'modal-profile-name long' : 'modal-profile-name';


    let editButtonClass = showEditMode ? 'edit-button-active' : 'edit-button'

    let date = profile.created_at.slice(0, 10);
    let year = date.slice(0, 4)
    let month = parseInt(date.slice(5, 7)) - 1;
    let day = date.slice(8, 10)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateMsg = `${monthNames[month]} ${day}, ${year}`;

    let imageClass = showEditMode ? 'modal-profile-edit-image' : 'modal-profile-image'

    return (
        <div className="modal-card">
            <div className="modal-top">
                <div className="modal-left">
                    <img alt={profile.name} src={profile.image_url} className={imageClass} />
                    {showEditMode ? <input type='text' className="profile-image-input" placeholder='Image Url' value={imageLink} onChange={(e) => { setImageLink(e.target.value) }}></input> : null}
                </div>
                <div className="modal-right">
                    <div className={profileNameClass}>{showEditMode ? <input className='profile-name-input' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder='First Name'></input> : profile.first_name} {showEditMode ? <input className='profile-name-input' value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder='Last Name'></input> : profile.last_name}</div>
                    <hr></hr>
                    <div className="modal-profile-details"> <label>Email:</label> {showEditMode ? <input className='profile-email-input' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Username'></input> : profile.username}</div>
                     <div className="modal-profile-details"> <label>Mixing Since: </label>{dateMsg}</div>
                    {/* {showEditMode ? <div className="modal-profile-details"><label>Password: </label> <input type='password' className='profile-password-input' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password'></input></div> : <div className="modal-profile-details"> <label>Mixing Since: </label>{dateMsg}</div>} */}
                    <div className='modal-profile-drinks-list-title'><label>Favorites: </label>{profile.favorites.length}</div>
                    <div className='modal-profile-cards-wrapper'>
                        {favoriteDrinksToDisplay}
                        {favoriteEmpty ? <div className='no-favorites-container'>
                            <div className='no-favorites-found'>No Favorites Found</div>
                            <div className='no-favorites-query'>Explore More Drinks to Add Favorites</div>
                        </div> : null}
                    </div>
                    <div className='modal-profile-drinks-list-title'><label>Created: </label> {profile.drinks.length}</div>
                    <div className='modal-profile-cards-wrapper'>
                        {createdDrinksToDisplay}
                        {createdEmpty ? <div className='no-favorites-container'>
                            <div className='no-favorites-found'>No Created Drinks Found</div>
                            <div className='no-favorites-query'>Go to the Mix Page to Create a Drink</div>
                        </div> : null}

                    </div>
                </div>
            </div>
            <div className="modal-bot">
                {showEditMode ? <div className='profile-edit-buttons'>
                    <button className={editButtonClass} onClick={clickEditButton}>CANCEL</button>
                    <button className='submit-profile-changes-button' onClick={handleSubmitButton}>SUBMIT</button>
                </div> :
                    <button className={editButtonClass} onClick={clickEditButton}>EDIT</button>
                }
                {showEditMode ? <button className="logout-button" onClick={handleLogOut}>LOG OUT</button> : <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>}
            </div>
        </div>
    )
}