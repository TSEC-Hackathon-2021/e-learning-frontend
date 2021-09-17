import React from 'react'
import Logo from '../../assests/images/logo.png'
import {Link} from 'react-router-dom'

import './style.css'

function index() {

	let change = (e) => {
		document.querySelector(".navbar--hamburger").classList.toggle("is-active");
	}


    return (
		<nav className="navbar navbar-expand-lg navbar-light border-bottom fixed-top" id="nav--main">
			<div className="container" id="nav--container">
				<a className="navbar-brand d-flex align-items-center" href="/">
					<span><img src={Logo} height="60px" alt="logo" /></span>
				</a>
				<button id="ham" aria-label="toogler" className="navbar-toggler navbar-toggler-right border-0 toogle" type="button" data-toggle="collapse" data-target="#navbar4" aria-expanded="true">
					<div className="navbar--hamburger" onClick={(e)=>change(e)}>
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</div>
				</button>
				<div className="collapse navbar-collapse" id="navbar4">
					<ul className="navbar-nav mr-auto pl-lg-4" id="nav--first">
						<li className="nav-item px-lg-2 active item--border">
							<a className="nav-link white-green" href="/">
								<span className="d-inline-block d-lg-none icon-width">
									<i className="fal fa-list"></i>
								</span>
								Courses
							</a>
						</li>
						<li className="nav-item px-lg-2 item--border">
							<a className="nav-link white-green" href="about.html">
								<span className="d-inline-block d-lg-none icon-width">
									<i className="fal fa-shopping-cart"></i>
								</span>
								Cart
							</a>
						</li>
						<li className="nav-item px-lg-2 item--border">
							<a className="nav-link white-green" href="membership.html">
								<span className="d-inline-block d-lg-none icon-width">
									<i className="fal fa-user-shield"></i>
								</span>
								Instructor
							</a>
						</li>
						<li className="nav-item px-lg-2 item--border">
							<a className="nav-link white-green" href="faq.html">
								<span className="d-inline-block d-lg-none icon-width">
									<i className="fal fa-user"></i>
								</span>
								Profile
							</a>
						</li>
					</ul>
					<div className="navbar-nav mr-auto pl-lg-4" id="nav--third">
						<div className="nav-item">
							<button id="brand1" aria-label="register" title="Sign Up" className="brand--button" type="button">
								<Link to='/signup'>
									Signup
								</Link>
							</button>
							<button id="brand2" aria-label="register" title="Login" className="brand--button" type="button">
								<Link to='/signup'>
									Login
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
    )
}

export default index;