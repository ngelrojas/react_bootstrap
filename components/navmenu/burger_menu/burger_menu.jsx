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
                    <li><Link to="#">Python #1</Link></li>
                    <li><Link to="#">Python #1</Link></li>
                    <li><Link to="#">Python #1</Link></li>
                </ol>
            </details>
            </li> 
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/">Contacts</Link>
            </li>
            <li>
                <Link to="/">About Me</Link>
            </li>
        </ol>
    </details>
        
    )
}
export default BurgerMenu

