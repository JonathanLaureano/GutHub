import axios from "axios";
import React,{useState} from "react";
import '../Modal.css';
import './ResultsModal.css';

export default function ResultsModal({showResultsModal,setResultsModal}) {
    const drinkImgs = require.context('../../../img/drinks', true);


    function handleClickCloseButton() {
        setShowResultsModal(false);
    }


    return (
        <div className="modal-card">
            <div className="modal-top">
                <div className="modal-left">
                </div>
                <div className="modal-right">
                </div>
            </div>
            <div className="modal-bot">
                <button className="close-button" onClick={handleClickCloseButton}>Add All to Favorites</button>
                <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
            </div>
        </div>
    )
}