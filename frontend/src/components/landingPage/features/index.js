import React from 'react'
import './style.css'

function index() {
    return (
        <section id="feat" className="features-icons text-center">
            <h1 style={{margin:'25px 0'}}>Features</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fal fa-books" id="feat-icn"></i></div>
                            <h3>Heading</h3>
                            <p className="lead mb-0">lorem ipsum dolor sit amet, consectetur adip</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fal fa-laptop-code" id="feat-icn"></i></div>
                            <h3>Heading</h3>
                            <p className="lead mb-0">lorem ipsum dolor sit amet, consectetur adip</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fas fa-chalkboard-teacher" id="feat-icn"></i></div>
                            <h3>Heading</h3>
                            <p className="lead mb-0">lorem ipsum dolor sit amet, consectetur adip</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index
