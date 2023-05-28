import React from 'react'
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="footer-bg">
            <div>
                <div className="nav-info">
                    <div className="nav-info--item">
                        <div className="nav-info--icon">
                            <BsIcons.BsTruck />
                        </div>
                        <div className="nav-info--text">
                            <h6 className="nav-info--title">SHIPPING IS ON US</h6>
                            <p className="nav-info-desc">On orders over $50.</p>
                        </div>
                    </div>
                    <div className="nav-info--item">
                        <div className="nav-info--icon">
                            <BsIcons.BsBoxSeam />
                        </div>
                        <div className="nav-info--text">
                            <h6 className="nav-info--title">FREE RETURNS ON ALL ORDERS</h6>
                            <p className="nav-info-desc">When you return in store.</p>
                        </div>
                    </div>
                    <div className="nav-info--item">
                        <div className="nav-info--icon">
                            <BiIcons.BiSupport/>
                        </div>
                        <div className="nav-info--text">
                            <h6 className="nav-info--title">CUSTOMER SERVICE</h6>
                            <p className="nav-info-desc">Monday-Friday: 9 am - 5 pm.</p>
                        </div>
                    </div>
                </div>
                <nav className="nav-footer">
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Shop</a></li>
                        <li><a>Log In/Register</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}