import './Sandbox.css';
import React from 'react';

function Sandbox() {
    
    // function handleclick() {
    //     ('.pour') //Pour Me Another Drink, Bartender!
    //       .delay(2000)
    //       .animate({
    //         height: '360px'
    //         }, 1500)
    //       .delay(1600)
    //       .slideUp(500);
        
    //     ('#liquid') // I Said Fill 'Er Up!
    //       .delay(3400)
    //       .animate({
    //         height: '170px'
    //       }, 2500);
    //   };
    
    return (

       <React.Fragment>
           <div>
                <a className="nav-link" href="/">Home</a>
           </div>
           <div id="container">
                <div className="pour"></div>
                <div id="beaker">
                    <div id="liquid" className='animate__animated animate__slideInUp'>
                        <div className="bubble bubble1"></div>
                        <div className="bubble bubble2"></div>
                        <div className="bubble bubble3"></div>
                        <div className="bubble bubble4"></div>
                        <div className="bubble bubble5"></div>
                    </div>
                </div>
            </div>

            <button className="center" >Fill er' Up</button> 
            {/* onClick={handleclick} */}

       </React.Fragment>

    );
}

export default Sandbox