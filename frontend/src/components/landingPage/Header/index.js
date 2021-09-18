import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';
import a from '../../../assests/images/a.jpg'
import b from '../../../assests/images/b.png'
import c from '../../../assests/images/c.jpeg'

function Header() {

  return(
    <div style={{marginTop:'10px'}}>
      <Carousel>
        <Carousel.Item>
          <img
            className="img-fluid"
            src={a}
            style={{width:"90%"}}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            style={{width:"90%"}}
            src={b}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            style={{width:"90%"}}
            src={c}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default Header;