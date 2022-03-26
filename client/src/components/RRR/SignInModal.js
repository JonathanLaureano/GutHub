// import './SignInModal.css';
// import React, { useState, useEffect } from 'react'
// import { Route, Switch } from "react-router-dom";
// import axios from 'axios';

// export default function SignInModal({username,setUsername,password,setPassword,handleLogInSubmit,showSignInModal,setShowSignInModal,signUpUsername,setSignUpUsername,signUpPassword,setSignUpPassword,signUpPasswordConfirmation,setSignUpPasswordConfirmation,signUpImage,setSignUpImage,signUpDesc,setSignUpDesc,handleSignUpSubmit}){
//     function handleCloseModal(){
//         setShowSignInModal(false)
//     }
//     return(
//         <React.Fragment>
//             {showSignInModal?<div onClick={handleCloseModal} className='signin-curtain'>-</div>:null}
//                 <div className='signin-card' > 
//                 <div className='form-columns'>
//                     <div className='signup-form'>
//                         <form onSubmit={handleSignUpSubmit}>
//                             <h1>Sign Up</h1>
//                             <div className='form'>
//                                 <label htmlFor="username">Username:</label>
//                                 <input
//                                     type="text"
//                                     id="signup-username"
//                                     value={signUpUsername}
//                                     onChange={(e) => setSignUpUsername(e.target.value)}
//                                 />
//                                 <label htmlFor="image">Image Link:</label>
//                                 <input
//                                     type="text"
//                                     id="image"
//                                     value={signUpImage}
//                                     onChange={(e) => setSignUpImage(e.target.value)}
//                                 />
//                                 <label htmlFor="description">Bio:</label>
//                                 <input
//                                     type="text"
//                                     id="bio"
//                                     value={signUpDesc}
//                                     onChange={(e) => setSignUpDesc(e.target.value)}
//                                 />
//                                 <label htmlFor="password">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="signup-password"
//                                     value={signUpPassword}
//                                     onChange={(e) => setSignUpPassword(e.target.value)}
//                                 />
//                                 <label htmlFor="password_confirmation">Confirm Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password_confirmation"
//                                     value={signUpPasswordConfirmation}
//                                     onChange={(e) => setSignUpPasswordConfirmation(e.target.value)}
//                                 />
//                                 <div>-</div>
//                                 <button type="submit">Submit</button>
//                             </div>
//                         </form>  
//                     </div>
//                     <div className="vl"></div>
//                     <div className='signin-form'>
//                         <form onSubmit={handleLogInSubmit}>
//                             <h1>Sign In</h1>
//                                 <div className='form'>
//                                     <label htmlFor="username">Username:</label>
//                                     <input
//                                         type="text"
//                                         id="username"
//                                         value={username}
//                                         onChange={(e) => setUsername(e.target.value)}
//                                     />
//                                     <label htmlFor="password">Password:</label>
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                     />
//                                     <div>-</div>
//                                     <button type="submit">Submit</button>
//                                 </div>
//                             </form>  
//                     </div>
//                 </div>
//                 <button onClick={handleCloseModal}>Close</button>
//                 </div>
//           </React.Fragment>
//     )
// }