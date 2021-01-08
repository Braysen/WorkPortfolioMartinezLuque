import React from 'react'

export default function ContactSection() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact_container bd-grid">
                <div className="contact_info">
                    <h3 className="contact_subtitle">EMAIL</h3>
                    <span className="contact_text">info.mail.com</span>

                    <h3 className="contact_subtitle">PHONE</h3>
                    <span className="contact_text">+51 928394857</span>

                    <h3 className="contact_subtitle">Address</h3>
                    <span className="contact_text">My country</span>
                </div>
                <form action="" className="contact_form">
                    <div className="contact_inputs">
                        <input type="text" placeholder="Name" className="contact_input"/>
                        <input type="mail" placeholder="Email" className="contact_input"/>
                        <textarea name="" id="" cols="0" rows="10" className="contact_input"></textarea>
                        <input type="submit" value="submit" className="contact_button"/>
                    </div>
                </form>
            </div>
        </section>
    )
}
