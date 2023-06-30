import React from 'react';
import '../../styles/components/modal.css'
import * as BsIcons from "react-icons/bs"

export default function Modal(props) {

    function closeModal() {
        props.setModal(prevModal => !prevModal)
        console.log(props.modal)
    }

    return (
        <div className={props.modal ? "modal active" : "modal inactive"}>
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-icon-container">
                    <BsIcons.BsCheck2Circle className="modal-icon"/> 
                    </div>
                    <h3 className="modal-title">Order Completed</h3>
                    <div className="modal-content-text">
                        <p><span>Name:</span> {props.firstName} {props.lastName}</p>
                        <p><span>Email:</span> {props.email}</p>
                        <p><span>City:</span> {props.city}</p>
                        <p><span>Address:</span> {props.address}</p>
                    </div>
                    <div className="modal-price-container">
                        <p className="modal-price">Total Price: {props.totalPrice}</p>
                    </div>
                    <div className="container-modal-btn">
                        <button className="btn-black modal-btn" onClick={closeModal}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}