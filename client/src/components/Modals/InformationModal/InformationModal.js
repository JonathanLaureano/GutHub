import React from "react";
import '../Modal.css';
import './InformationModal.css';

export default function InformationModal({showInformationModal, setShowInformationModal}) {


    function handleClickCloseButton() {
        setShowInformationModal(false);
    }


    return (
        <div className="modal-card">
            <div className="modal-top">

            </div>
            <div className="modal-bot">
                <button className="close-button" onClick={handleClickCloseButton}>CLOSE</button>
            </div>
        </div>
    )
}