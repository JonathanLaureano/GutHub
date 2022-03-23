import './SignInModal.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function SignInModal({username,setUsername,password,setPassword,passwordConfirmation,setPasswordConfirmation,handleSubmit,setShowSignInModal}){
    function handleCloseModal(){
        setShowSignInModal(false)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button type="submit">Submit</button>
            <button onClick={handleCloseModal}>Close Sign Up</button>
          </form>   
    )
}