import React from 'react';
import '../../styles/components/success.css'
import * as BsIcons from "react-icons/bs"

export default function Success() {
    return (
        <div className="success"><BsIcons.BsCheckCircleFill className="success-icon" /> Added to cart successfully!</div>
    )
}