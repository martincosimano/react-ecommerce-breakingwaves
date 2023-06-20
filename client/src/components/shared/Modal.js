import React from 'react';
import '../../styles/components/modal.css'

export default function Modal(props) {

    function closeModal() {
        props.setModal(prevModal => !prevModal)
        console.log(props.modal)
    }

    return (
        <div className={props.modal ? "modal active" : "modal inactive"}>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h3 className="modal-title">Thank you for your order</h3>
                    <div className="modal-content-text">
                        <p>Name: {props.firstName} {props.lastName}</p>
                        <p>Email: {props.email}</p>
                        <p>City: {props.city}</p>
                        <p>Address: {props.address}</p>
                    </div>
                    <div className="container-modal-btn">
                        <button className="btn-black modal-btn" onClick={closeModal}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}