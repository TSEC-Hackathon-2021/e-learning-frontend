import React from 'react'
import './style.css'
import js from '../../../assests/images/testimonials-1.jpg'

function index() {
    return (
        <section class="testimonials text-center">
            <div class="container">
                <h1 style={{margin:'25px 0'}}>Testimonials</h1>
                <div className="container">
                    <div className="test--item test--item--1">
		        	    <div className="fig bx-shadow">
		  		            <img src={js} alt="testimonial" />
        			    </div>
		        	    <div className="data p-4 bx-shadow ">
		  		            <p className="pt-4">lorem ipsum dolor sit amet, consectetur adip</p>
		  		            <h5 className="mb-1 text-primary">NAME</h5>
        		  		    <p className="mb-0">POSITION</p>
		        	    </div>
        	  	    </div>
                </div>
                <div className="container">
                    <div className="test--item test--item--2">
		        	    <div className="fig bx-shadow">
		  		            <img src={js} alt="testimonial" />
        			    </div>
		        	    <div className="data p-4 bx-shadow ">
		  		            <p className="pt-4">lorem ipsum dolor sit amet, consectetur adip</p>
		  		            <h5 className="mb-1 text-primary">NAME</h5>
        		  		    <p className="mb-0">POSITION</p>
		        	    </div>
        	  	    </div>
                </div>
            </div>
        </section>
    )
}

export default index
