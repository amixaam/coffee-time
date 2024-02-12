import React from "react";
import ReactModal from "react-modal";

import "./FriesBarPopup.css";

export default function FriesBarPopup({ isOpen, toggleState }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={toggleState}
            overlayClassName="modal-overlay"
            className="modal-content "
        >
            <h1 className="title">Coffee Time</h1>
            <div className="fry-menu">
                <a href="#" className="selected">
                    Home
                </a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Blog</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
            </div>
            <p>
                the fuck is up, its FRY RICK!! I TURNED MYSELF INTO A FRY
                MORTY!1!!!!1!
            </p>
        </ReactModal>
    );
}
