import React from "react"
import {Link} from 'react-router-dom'
import LoginImage from "../../assests/images/login.png"

import "./styles.css"

let index = () => {
    return(
        <div className="main">
            <section className="signup">
                <div className="signup--container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign In</h2>
                            <form method="POST" className="register-form" id="register-form" autoComplete="off">
                                <div className="form-group">
                                    <label className="signup-label" htmlFor="email"><i className="fal fa-envelope"></i></label>
                                    <input className="signup-Input" type="email" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label className="signup-label" htmlFor="pass"><i className="fal fa-lock"></i></label>
                                    <input className="signup-Input" type="password" name="pass" id="pass" placeholder="Password"/>
                                </div>
                                <div className="form-group form-button">
                                    <button type="button" className="form-submit btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img className="signup-img" src={LoginImage} alt="Login Image" /></figure>
                            <Link to="/signup" className="signup-image-link">I am a new member</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index;