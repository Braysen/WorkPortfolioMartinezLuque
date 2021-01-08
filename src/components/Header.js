import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="# " className="nav_logo">Luis Martinez Luque</a>
                </div>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link ">Home</a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">About</a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">Skills</a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav_link">Portfolio</a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">Contact</a>
                        </li>
                        
                    </ul>
                </div>
                
                <div className="nav_toggle" id="nav-toggle">
                    <i className="bx bx-menu"><MenuIcon/></i>
                </div>
            </nav>
	</header>
    )
}
