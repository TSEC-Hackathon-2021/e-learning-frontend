import React from 'react'
import './style.css'

function index() {
    return (
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="text-center text-white">
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                            <form id="srch-frm">
                                <div className="container">
                                    <div className="row">
                                        <input id="srch-inp" className="form-control col-sm-9" placeholder="Search Courses" style={{height:"unset"}} />
                                        <button className="btn btn-primary col-sm-2" id="srch-btn" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default index
