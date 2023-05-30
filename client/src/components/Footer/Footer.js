import React from 'react'
import '../../styles/footer.css'
import * as BsIcons from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="footer-bg">
            <div className="container">
                <div className="container-footer-form">
                    <form className="footer-form">
                        <input className="footer-form--input" type="email" placeholder="Subscribe to our newsletter"></input>
                        <button className="footer-form--btn">Subscribe</button>
                    </form>
                </div>
                <nav className="nav-footer">
                    <ul>
                        <li><a href="" className="nav-footer--icons"><BsIcons.BsFacebook/></a></li>
                        <li><a href="" className="nav-footer--icons"><BsIcons.BsTwitter/></a></li>
                        <li><a href="" className="nav-footer--icons"><BsIcons.BsInstagram/></a></li>
                        <li><a href="" className="nav-footer--icons"><BsIcons.BsYoutube/></a></li>
                        <li><a href="" className="nav-footer--icons"><BsIcons.BsMap/></a></li>
                    </ul>
                </nav>
                <div className="container-copyright">
                    <p className="text-copyright">© <a href="https://martincosimano.github.io/portfolio/">Martín Cosimano</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}