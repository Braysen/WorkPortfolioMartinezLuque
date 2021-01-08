import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function FooterSection() {
    return (
        <footer className="footer section">
            <div className="footer_container bd-grid">
                <div className="footer_data">
                    <h2 className="footer_title">Luis Martinez Luque</h2>
                    <p className="footer_text">I'm Luis Martinez Luque and this is my personal website</p>
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
                    <a href="https://web.facebook.com/luisenrique.martinezluque" className="footer_social"><i className="bx bxl-facebook"><FacebookIcon/></i></a>
                    <a href="# " className="footer_social"><i className="bx bxl-instagram"><GitHubIcon/></i></a>
                    <a href="# " className="footer_social"><i className="bx bxl-github"><LinkedInIcon/></i></a>
                </div>
                <div className="footer_data">
                    <h2 className="footer_title">&#169; 2021 JBraToc. All right reserved.</h2>
                </div>
            </div>
        </footer>
    )
}
