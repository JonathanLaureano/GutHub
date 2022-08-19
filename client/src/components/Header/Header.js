import './Header.css';
import React from 'react'


export default function Header({showProfileModal,setShowProfileModal}){
    function handleProfileClick(){
        setShowProfileModal(true)
    }

    return(
        <React.Fragment>
            <div className='header-nav'>
                <img src={"https://img.icons8.com/material-rounded/384/000000/user.png"} onClick={handleProfileClick} className='profile-picture'/>
            </div>
        </React.Fragment>
    )
}