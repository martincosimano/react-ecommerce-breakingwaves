import React from 'react';

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-section-split">
                <h3 className="home-about-title">Clothing designed<br/> for adventure.</h3>
                <div className="btn-container-about">
                    <a href=""><button className="btn-black">Read about us</button></a>
                </div>
            </div>
            <div className="about-section-split">
               <img className="home-about-img" src={require("../../assets/images/read-about.png")} alt=""/> 
            </div>
        </section>
    )
}