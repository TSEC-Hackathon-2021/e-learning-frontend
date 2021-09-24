import React from 'react'
import Navbar from '../landingPage/Navbar'
import HTML from '../../assests/images/HTML.png'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'


function CoursePage() {
    const course={
        id:1,
        name:"HTML,CSS,JS",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img:'../../assests/images/HTML.png',
        price:500
    }
    return (
        <React.Fragment>
            <Navbar />
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-sm-12 col-md-6" style={{height:'70vh'}}>
                        <img className="img-fluid" src={HTML} style={{height:'100%'}}/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                        <h3>{course.name}</h3>
                                        </ListGroup.Item>
                                        <ListGroup.Item>Price: ${course.price}</ListGroup.Item>
                                        <ListGroup.Item>
                                          Description: {course.desc}
                                        </ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <ListGroup.Item>
                                        <Button
                                        className='btn-block'
                                        type='button'
                                        disabled={false}
                                        >
                                        Add To Cart
                                        </Button>
                                        <Button
                                        className='btn-block'
                                        type='button'
                                        disabled={false}
                                        >
                                        Buy
                                        </Button>
                                </ListGroup.Item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CoursePage
