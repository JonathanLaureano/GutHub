import './SignInModal.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

export default function SignInModal({username,setUsername,password,setPassword,passwordConfirmation,setPasswordConfirmation,handleSubmit,showSignInModal,setShowSignInModal}){
    function handleCloseModal(){
        setShowSignInModal(false)
    }
    return(
        <React.Fragment>
            {showSignInModal?<div className='test'>-</div>:null}
                <div className='signin-card'> 
                <div className='form-columns'>
                    <div className='signup-form'>
                        <form onSubmit={handleSubmit}>
                            <div className='form'>
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
                            </div>
                        </form>  
                    </div>
                    <div className='signin-form'>
                        <form onSubmit={handleSubmit}>
                                <div className='form'>
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
                                    <button type="submit">Submit</button>
                                    <button onClick={handleCloseModal}>Close Sign Up</button>
                                </div>
                            </form>  
                    </div>
                </div>

                </div>
          </React.Fragment>
    )
}