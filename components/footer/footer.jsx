import React from 'react'
import {Link } from 'react-router-dom'
import  IconFacebook from './image/facebook.png'
import IconTwitter from './image/twitter.png'
import IconLinkedin from './image/linkedin.png'
import IconYoutube from './image/youtube.png'
import './scss/footer.scss'


const Footer = () => {
    return(
        <footer>
            <div className="footer-left"></div>
            <div className="footer-content">
                <ul>
                    <li>
                        <Link to="https://www.facebook.com/ngelrojasp"><img src={IconFacebook} className="img-sn-responsive" alt="facebook - ngelrojasp" /></Link>
                    </li>
                    <li>
                        <Link to="https://www.twitter.com/ngelrojasp"><img src={IconTwitter} className="img-sn-responsive" alt="twitter - ngelrojasp" /></Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/ngelrojasp"><img src={IconLinkedin} className="img-sn-responsive" alt="linkedin - ngelrojasp" /></Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/ngelrojasp"><img src={IconYoutube} className="img-sn-responsive" alt="youtube - ngelrojasp" /></Link>
                    </li>
                </ul>                
            </div>
            <div className="footer-right"></div>

        </footer>
    )
}
export default Footer
