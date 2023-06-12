import React from 'react';
import '../../styles/components/success.css'
import * as BsIcons from "react-icons/bs"

export default function Success(props) {
    return (
        <div className={props.isShop ? "success shop" : "success slider"}><BsIcons.BsCheckCircleFill className="success-icon" /> Added to cart successfully!</div>
    )
}