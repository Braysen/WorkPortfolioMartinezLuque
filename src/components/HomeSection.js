import React from 'react'
import logo from '../resources/images/perfil.png'

export default function HomeSection() {
    return (
        <section className="home" id="home">
            <div className="home_container bd-grid">
                <h1 className="home_title"><span>HE</span><br/>LLO.</h1>
                <div className="home_scroll">
                    <a href="#about" className="home_scroll-link"><i className="bx bx-up-arrow-alt"></i>Scroll down</a>
                </div>
                <img src={logo} alt="" className="home_img"/>
            </div>
        </section>
    )
}
