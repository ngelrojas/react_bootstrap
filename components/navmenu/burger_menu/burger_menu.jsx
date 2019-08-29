import React from 'react'
import {Link} from 'react-router-dom'


const BurgerMenu = () =>{
    return(

    <details className="navmenu__wrapper-burger_menu">
        <summary> <i className="fa fa-bars"></i></summary>
        <ol>
            <li><Link to="/">Home</Link></li>
            <li>
            <details>
                <summary>Tutorials</summary>
                <ol>
                    <li><Link to="/categories/python">Python</Link></li>
                    <li><Link to="/categories/cpp">cpp</Link></li>
                    <li><Link to="/categories/javascript">javascript</Link></li>
                </ol>
            </details>
            </li> 
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/cantacts">Contacts</Link>
            </li>
            <li>
                <Link to="/about-me">About Me</Link>
            </li>
        </ol>
    </details>
        
    )
}
export default BurgerMenu

