import React from 'react'
import { Link } from 'react-router-dom'
import './scss/navMenu.scss'


const NavMenu = () => {
    return(
        <nav className="navmenu__wrapp">
            <div className="navmenu__wrapp-logo">
                <Link to="/"><h1>LOGO AR</h1></Link>
            </div>
            
            <ul className="navmenu__wrapper-menu">
                <li><Link to="/">Home</Link></li>
                <li>
                    <div className="navmenu__wrapp-tutorials">
                        <div className="dropdown">
                            <Link to="#" className="dropbtn">
                                Tutorials
                            </Link>
                            <div className="dropdown-content">
                                <Link to="#">Python</Link>
                                <Link to="#">C++</Link>
                                <Link to="#">Clojure</Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
            </ul>
            <div className="navmenu__wrapp-lang">
                <div className="dropdown">
                    <button className="dropbtn">
                        <i className="fa fa-flag"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="#">US</Link>
                        <Link to="#">PT</Link>
                        <Link to="#">ES</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu
