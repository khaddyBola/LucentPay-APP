import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/lucent-logo.webp'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">         
               <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Illum eos iusto odit, veritatis nisi quam.
                    </p>
                    <div className="footer-social-media">
                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook/>
                        </a>
                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter/>
                        </a>
                        <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/>
                        </a>
                    </div>
                </article>

                <article className="footer-company">
                    <h5>Company</h5>
                    <Link to="/company">About Us</Link>
                    <Link to="/s">Feature</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contacts">Contact Us</Link>
                </article>

                <article className="footer-information">
                    <h5>Informations</h5>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Documentation</Link>
                    <Link to="s">Forum</Link>
                    <Link to="/faqs">FAQs</Link>
                </article>
            </div>
            <div className="footer-copyright">
                <p>Copyright &copy; <span>2022</span> by LucentPay Inc. All rights reserved</p>
                <Link to="/company">Privacy Policy</Link>
            </div>
        </footer>
    )
}

export default Footer;