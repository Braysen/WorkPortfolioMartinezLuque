import React from 'react'

export default function Header() {
    return (
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="# " class="nav_logo">Luis Martinez</a>
                </div>
                <div class="nav_menu" id="nav-menu">
                    <ul class="nav_list">
                        <li class="nav_item">
                            <a href="#home" class="nav_link active">Home</a>
                        </li>
                        <li class="nav_item">
                            <a href="#about" class="nav_link">About</a>
                        </li>
                        <li class="nav_item">
                            <a href="#skills" class="nav_link">Skills</a>
                        </li>
                        <li class="nav_item">
                            <a href="#portfolio" class="nav_link">Portfolio</a>
                        </li>
                        <li class="nav_item">
                            <a href="#contact" class="nav_link">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="nav_toggle" id="nav-toggle">
                    <i class="bx bx-menu">=</i>
                </div>
            </nav>
	</header>
    )
}
