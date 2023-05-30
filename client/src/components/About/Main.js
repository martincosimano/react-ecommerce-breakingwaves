import React from 'react';
import '../../styles/about.css'

export default function Main() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="container-main-title">
                    <h1 className="main-title decorated">A Brief History of<br/> Breaking Waves:</h1>
                </div>
                <div>
                    <div className="main-dot-start"></div>
                    <div className="main-line"></div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="split">
                        <div>
                            <h2>1966</h2>
                            <p>Brothers Paul Van Doren and Jim Van Doren along with partners Gordon Lee and Serge Delia open for business at 704 E. Broadway in Anaheim, Calif. on March 16. The Van Doren Rubber Company is unique in that it manufactures shoes on premises and sells them directly to the public.</p>
                        </div>
                        <div>
                            <img src="../../assets/images/logo.png" />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}