import React from 'react'
import {Card,Button} from 'react-bootstrap'
import cpp from '../../assests/images/cpp.jpg'
import java from '../../assests/images/java.png'
import js from '../../assests/images/js.png'
import python from '../../assests/images/python.png'

function Domain() {
    return (
        <React.Fragment>
            <h1 style={{marginTop:'50px'}}>Domains</h1>
            <div className="container-fluid" style={{marginLeft:"50px"}}>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <Card style={{ width: '18rem' ,marginTop:"10px"}}>
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
                    <div className="col-md-4 col-sm-12">
                        <Card style={{ width: '18rem'  ,marginTop:"10px"}}>
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
                    <div className="col-md-4 col-sm-12">
                        <Card style={{ width: '18rem' ,marginTop:"10px" }}>
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
                    <div className="col-md-4 col-sm-12">
                        <Card style={{ width: '18rem' , marginTop:"10px"}}>
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
                    <div className="col-md-4 col-sm-12">
                        <Card style={{ width: '18rem' , marginTop:"10px"}}>
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
        </React.Fragment>
    )
}

export default Domain
