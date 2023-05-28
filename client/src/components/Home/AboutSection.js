import React from 'react';

export default function AboutSection() {
    return (
        <section>
            <div>
                <h3>Clothing designed for adventure.</h3>
                <div className="btn-container">
                    <a href=""><button className="btn-black">Read about us</button></a>
                </div>
            </div>
            <div>
               <img src={require("../../assets/images/read-about.jpg")} alt=""/> 
            </div>
        </section>
    )
}