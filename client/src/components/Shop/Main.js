import React from 'react';
import '../../styles/shop.css'

export default function Main() {
    return (
        <main className="shop-main">
            <div className="container">
                <div className="shop-container">
                    <div className="sidebar-container">
                        <aside className="">
                            <h3 className="sidebar-title decorated">Categories</h3>
                            <ul className="sidebar-categories">
                                <li className="category-item"><a href="">Remeras y musculosas</a></li>
                                <li className="category-item"><a href="">Buzos y hoodies</a></li>
                                <li className="category-item"><a href="">Camperas</a></li>
                                <li className="category-item"><a href="">Camisas</a></li>
                                <li className="category-item"><a href="">Pantalones</a></li>
                                <li className="category-item"><a href="">Skateboarding</a></li>
                            </ul>
                        </aside>
                    </div>

                    <div className="shop">
                        <div className="products-container">
                            <form className="shop-ordering">
                                <select className="orderby">
                                    <option>Ordenar por precio: descendiente</option>
                                    <option>Ordenar por precio: ascendiente</option>
                                </select>
                            </form>
                            <div className="products--container">
                                <div className="shop-card--container">

                                {/* PRODUCTO  */}
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/* PRODUCTO  */}
                                </div>

                            </div>
                            <div>
                                <nav className="nav-pagination">
                                    <ul className="page-numbers nav-pagination links text-center">
                                        <li><span className="page-number current">1</span></li>
                                        <li><span className="page-number current">2</span></li>
                                        <li><span className="page-number current">3</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}