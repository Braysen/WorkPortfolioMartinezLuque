import React from 'react'

export default function FooterSection() {
    return (
        <footer className="footer section">
            <div className="footer_container bd-grid">
                <div className="footer_data">
                    <h2 className="footer_title">Luis Martinez</h2>
                    <p className="footer_text">I'm Luis Martinez and this is my personal website</p>
                </div>
                <div className="footer_data">
                    <h2 className="footer_title">EXPLORE</h2>
                    <ul>
                        <li><a href="#home" className="footer_link">Home</a></li>
                        <li><a href="#about" className="footer_link">About</a></li>
                        <li><a href="#skills" className="footer_link">Skills</a></li>
                        <li><a href="#portfolio" className="footer_link">Portfolio</a></li>
                        <li><a href="#contact" className="footer_link">Contact</a></li>
                    </ul>
                </div>
                <div className="footer_data">
                    <h2 className="footer_title">FOLLOW</h2>
                    <a href="# " className="footer_social"><i className="bx bxl-facebook"></i></a>
                    <a href="# " className="footer_social"><i className="bx bxl-instagram"></i></a>
                    <a href="# " className="footer_social"><i className="bx bxl-github"></i></a>
                </div>
            </div>
        </footer>
    )
}
