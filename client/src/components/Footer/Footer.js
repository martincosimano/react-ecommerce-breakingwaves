import React from 'react'
import '../../styles/footer.css'
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
                            <h6 className="nav-info--title">FREE RETURNS</h6>
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