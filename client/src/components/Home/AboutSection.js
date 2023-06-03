import React from 'react';
import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="split">
                    <div className="first-splitted">
                        <h3 className="home-about-title">Clothing designed<br/> for adventure.</h3>
                        <div className="btn-container-about">
                            <Link to="/about"><button className="btn-black">Read about us</button></Link>
                        </div>
                    </div>
                    <div>
                       <img className="home-about-img" src={require("../../assets/images/read-about.png")} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}