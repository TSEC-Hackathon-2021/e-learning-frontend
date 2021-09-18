import React from 'react'
import './style.css'

function index() {
    return (
        <footer>
            <div className="content">
		        <div className="footer-top">
                    <div className="logo-details">
                        <span className="logo_name">Prolearn</span>
                    </div>
                    <div className="media-icons">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="/"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="link-boxes row">
                    <ul className="box col-lg-3 col-sm-6">
                        <li className="link_name">Links</li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Get Started</a></li>
                    </ul>
                    <ul className="box col-lg-3 col-sm-6">
                        <li className="link_name">Services</li>
                        <li><a href="/">App Design</a></li>
                        <li><a href="/">Web Design</a></li>
                        <li><a href="/">Logo Design</a></li>
                        <li><a href="/">Banner Design</a></li>
                    </ul>
                    <ul className="box col-lg-3 col-sm-6">
                        <li className="link_name">Other services</li>
                        <li><a href="/">SEO</a></li>
                        <li><a href="/">Content Marketing</a></li>
                        <li><a href="/">Prints</a></li>
                        <li><a href="/">Social Media</a></li>
                    </ul>
                    <ul className="box col-lg-3 col-sm-6">
                        <li className="link_name">Contact</li>
                        <li><a href="/">+91 8879887262</a></li>
                        <li><a href="/">+91 8879887262</a></li>
                        <li><a href="/">contact@sitesoch.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">
                        Copyright &copy; 2021
                        <a style={{marginLeft:"10px"}} href="/">Prolearn</a>
                    </span>
                    <span className="policy_terms">
                        <a href="/">Privacy policy</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default index
