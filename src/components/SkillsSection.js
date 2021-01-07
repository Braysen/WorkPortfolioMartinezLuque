import React from 'react'
import logo from '../resources/images/skill.jpg'

export default function SkillsSection() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills_container bd-grid">
                <div className="skills_box">
                    <h3 className="skills_subtitle">Development</h3>
                    <span className="skills_name">Html</span>
                    <span className="skills_name">Css</span>
                    <span className="skills_name">Javascript</span>
                    <span className="skills_name">Scss</span>
                    <span className="skills_name">Vue</span>
                    <span className="skills_name">React</span>

                    <h3 className="skills_subtitle">Design</h3>
                    <span className="skills_name">Figma</span>
                    <span className="skills_name">Adobe XD</span>
                    <span className="skills_name">Photoshop</span>
                </div>

                <div className="skills_img">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </section>
    )
}
