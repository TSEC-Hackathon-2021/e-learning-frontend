import React from "react"
import {Link} from 'react-router-dom'
import signupImage from "../../assests/images/signup-imagei.png"

import "./style.css"

let index = () => {
    return(
        <div className="main">
            <section className="signup">
                <div className="signup--container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form" autoComplete="off">
                                <div className="form-group">
                                    <label className="signup-label" htmlFor="name"><i className="fal fa-user"></i></label>
                                    <input className="signup-Input" type="text" name="name" id="name" placeholder="Your Name"/>
                                </div>
                                <div className="form-group">
                                    <label className="signup-label" htmlFor="email"><i className="fal fa-envelope"></i></label>
                                    <input className="signup-Input" type="email" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label className="signup-label" htmlFor="pass"><i className="fal fa-lock"></i></label>
                                    <input className="signup-Input" type="password" name="pass" id="pass" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label className="signup-label" htmlFor="re-pass"><i className="fal fa-lock"></i></label>
                                    <input className="signup-Input" type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                                </div>
                                <div className="form-group">
                                    <div style={{textAlign:"left",marginBottom:"1rem",fontSize:"1rem",fontWeight:"500"}}>Select Your Role</div>
                                    <div style={{width:"fit-content",display:"inline-block",marginRight:"2rem",float:"left"}}>
                                        <input type="radio" id="teacher" style={{marginRight:"1rem",outline:"none"}} name="Main" value="teacher" />
                                        <label htmlFor="teacher">Teacher</label>
                                    </div>
                                    <div style={{width:"fit-content",display:"inline-block"}}>
                                        <input type="radio" id="student" style={{marginRight:"1rem",outline:"none"}} name="Main" value="student" />
                                        <label htmlFor="student">Student</label>
                                    </div>
                                </div>
                                <div className="form-group form-button">
                                    <button type="button" className="form-submit btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img className="signup-img" src={signupImage} alt="singupimage" /></figure>
                            <Link to="/login" className="signup-image-link">I am already member</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index;