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
            {showSignInModal?<div className='signin-curtain'>-</div>:null}
                <div className='signin-card'> 
                <div className='form-columns'>
                    <div className='signup-form'>
                        <form onSubmit={handleSubmit}>
                            <h1>Sign Up</h1>
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
                                <div>-</div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>  
                    </div>
                    <div class="vl"></div>
                    <div className='signin-form'>
                        <form onSubmit={handleSubmit}>
                            <h1>Sign In</h1>
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
                                    <div>-</div>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>  
                    </div>
                </div>
                <button onClick={handleCloseModal}>Close</button>
                </div>
          </React.Fragment>
    )
}