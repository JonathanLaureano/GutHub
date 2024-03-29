import React, { useState } from 'react';
import './SignInModal.css';

export default function SignInModal({ username, setUsername, password, setPassword, handleLogInSubmit, showSignInModal, setShowSignInModal, signUpFirstName, setSignUpFirstName, signUpLastName, setSignUpLastName, signUpUsername, setSignUpUsername, signUpPassword, setSignUpPassword, signUpPasswordConfirmation, setSignUpPasswordConfirmation, signUpImage, setSignUpImage, signUpDesc, setSignUpDesc, handleSignUpSubmit,handleDemoLogIn }) {

    const [formType, setFormType] = useState(true)

    function onFormClick() {
        setFormType(formType => !formType)
    }

    return (
        <div className='signin-modal'>
            <div className={formType ? "container" : "container right-panel-active"} id="container">
                <div className="signin-container">
                    <div className="form-container sign-up-container">
                        <form className='modal-form' action="#">
                            <h1 className='modal-create'>Create Account</h1>
                            <div className='modal-input-fullname'>
                                <input className='modal-input-name' type="text" placeholder="First Name" value={signUpFirstName} onChange={(e) => { setSignUpFirstName(e.target.value) }} />
                                <input className='modal-input-name last' type="text" placeholder="Last Name" value={signUpLastName} onChange={(e) => { setSignUpLastName(e.target.value) }} />
                            </div>
                            <input className='modal-input' type="text" placeholder="Email" value={signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} />
                            <input className='modal-input' type="password" placeholder="Password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
                            <input className='modal-input-end' type="password" placeholder="Password Confirmation" value={signUpPasswordConfirmation} onChange={(e) => setSignUpPasswordConfirmation(e.target.value)} />
                            <button className='modal-button' onClick={handleSignUpSubmit} >Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form className='modal-form' action="#">
                            <h1 className='modal-signin-title'>Sign in</h1>
                            <input className='modal-input' type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input className='modal-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <a className='modal-a' href="#">Forgot your password?</a>
                            <button className='modal-button' onClick={handleLogInSubmit}>Sign In</button>
                            <button className='modal-button demo' onClick={handleDemoLogIn}>Sign In as Demo User</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className='modal-welcome'>Welcome</h1>
                                <p className='modal-subtitle'>To create and save your favorite drinks, please log in.</p>
                                <button onClick={onFormClick} className=" modal-button ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className='modal-welcome'>Welcome</h1>
                                <p className='modal-subtitle'>Before we start mixing, you'll need to provide some information.</p>
                                <button onClick={onFormClick} className="modal-button ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
