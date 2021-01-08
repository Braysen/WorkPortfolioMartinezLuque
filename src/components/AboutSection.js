import React from 'react'
import logo from '../resources/images/perfil.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function AboutSection() {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="about_container bd-grid">
                <div className="about_img">
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <h2 className="about_subtitle">I am Luis Martinez Luque</h2>
                    <span className="about_profession">Web Developer</span>
                    <p className="about_text">Mi nombre es Luis Martinez Luque soy estudiante de la carrera de Ingeniería de sistemas e informática, me gusta aprender nuevas tecnologías. Mi objetivo es integrar equipos con alta especialización tecnológica.</p>
                    <div className="about_social">
                        <a href="# " className="about_social-icon"><i className="bx bxl-linkedin"><LinkedInIcon/></i></a>
                        <a href="# " className="about_social-icon"><i className="bx bxl-github"><GitHubIcon/></i></a>
                        <a href="https://web.facebook.com/luisenrique.martinezluque" className="about_social-icon"><i className="bx bxl-facebook"><FacebookIcon/></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
