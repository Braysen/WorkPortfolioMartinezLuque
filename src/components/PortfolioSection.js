import React from 'react'
import logo from '../resources/images/work1.jpg'
import logo1 from '../resources/images/work2.jpg'
import logo2 from '../resources/images/work3.jpg'
import logo3 from '../resources/images/work4.jpg'
import logo4 from '../resources/images/work5.jpg'
import logo5 from '../resources/images/work6.jpg'

export default function PortfolioSection() {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div className="portfolio_container bd-grid">
                <div className="portfolio_img">
                    <img src={logo} alt=""/>
                    <div className="portfolio_link">
                        <a href="# " className="portfolio_link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio_img">
                    <img src={logo1} alt=""/>
                    <div className="portfolio_link">
                        <a href="# " className="portfolio_link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio_img">
                    <img src={logo2} alt=""/>
                    <div className="portfolio_link">
                        <a href="# " className="portfolio_link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio_img">
                    <img src={logo3} alt=""/>
                    <div className="portfolio_link">
                        <a href="# " className="portfolio_link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio_img">
                    <img src={logo4} alt=""/>
                    <div className="portfolio_link">
                        <a href="# " className="portfolio_link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio_img">
                    <img src={logo5} alt=""/>
                    <div className="portfolio_link">
                        <a href="# " className="portfolio_link-name">View details</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
