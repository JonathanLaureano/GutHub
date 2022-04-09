import React from "react";
import '../Modal.css';
import './InformationModal.css';

export default function InformationModal({showInformationModal, setShowInformationModal}) {


    function handleClickCloseButton() {
        setShowInformationModal(false);
    }


    return (
        <div className="modal-card">
            <div className="information-modal-top">
                <div className='information-title'>Make-a-Mix Information:</div>
                <ul className='information-items'>
                    <li className='information-item'>Click on the corresponding buttons on the ingredient cards to increase and decrease the parts count in your desired recipe</li>
                    <li className='information-item'>Ingredient parts counts are measured in shots</li>
                    <li className='information-item'>There is a max total parts count of 11 shots per recipe</li>
                    <li className='information-item'>1 shot is equivalent to 1.5 fl oz</li>
                    <li className='information-item'>Solid ingredients have a max of 1 parts count per ingredient</li>
                    <li className='information-item'>Alcohol and Liquid ingredients have a max of 5 parts count per ingredient</li>
                </ul>


            </div>
            <div className="modal-bot">
                <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
            </div>
        </div>
    )
}