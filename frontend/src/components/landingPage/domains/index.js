import React from 'react'
import {Card,Button} from 'react-bootstrap'
import cpp from '../../../assests/images/cpp.jpg'
import java from '../../../assests/images/java.png'
import js from '../../../assests/images/js.png'
import python from '../../../assests/images/python.png'

import './style.css'

function Domain() {
    return (
        <React.Fragment>
            <div id="domn" className="container-fluid">
                <h1>Domains</h1>
                <div className="container" style={{padding:"none !important"}}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Card className="course--mycard">
                                <Card.Img variant="top" src={cpp} />
                                <Card.Body>
                                    <Card.Title>C++</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Card className="course--mycard">
                                <Card.Img variant="top" src={java} />
                                <Card.Body>
                                    <Card.Title>Java</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Card className="course--mycard">
                                <Card.Img variant="top" src={python} />
                                <Card.Body>
                                    <Card.Title>Python</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Card className="course--mycard">
                                <Card.Img variant="top" src={js} />
                                <Card.Body>
                                    <Card.Title>Javascript</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Card className="course--mycard">
                                <Card.Img variant="top" src={js} />
                                <Card.Body>
                                    <Card.Title>Javascript</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Domain
