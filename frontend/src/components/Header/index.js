import React from 'react';

import './style.css';

function Header() {

  return(
    <header>
      <div id="myCarousel" className="carousel slide carousel-fade" data-interval="5000" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="cr-img-gradient">
            <img src='https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1187833318_2000133220009280118_mbtvwq.jpg' className="d-block w-100" alt="slider1" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="cr-img-gradient">
            <img src='https://www.thegef.org/sites/default/files/IntroToGEF_870.jpg' className="d-block w-100" alt="slider2" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="cr-img-gradient">
            <img src='https://www.harmonicinc.com/hs-fs/hubfs/Website/Training%20Overview/Training-Online-Course-901x565.jpg?width=901&height=565&name=Training-Online-Course-901x565.jpg' className="d-block w-100" alt="slider3" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="cr-img-gradient">
            <img src='https://www.harmonicinc.com/hs-fs/hubfs/Website/Training%20Overview/Training-Instructor-Led-901x565.jpg?width=901&height=565&name=Training-Instructor-Led-901x565.jpg' className="d-block w-100" alt="slider4" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="cr-img-gradient">
            <img src='https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png' className="d-block w-100" alt="slider5" />
          </div>
        </div>
      </div>
    </div>
    <div className="container main-carousel-caption">
      <div className="row justify-content-center align-items-center">
        <div className='caption-wrapper'>
          <div className="col-12">
            <p>10,000+ Travel Experiences in 25+ Countries</p>
            <h3>Be There, Do That!</h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center no-gutters">
        <form className="form-inline w-100">
            <div className="row">
                <div className="col-sm-9 px-0" style={{marginRight:"2rem"}}>
                    <input id="search-tag" className="form-control w-100" type="search" placeholder="Search Courses" aria-label="Search" autoComplete="off" />
                </div>
                <div className="col-sm-2 px-0">
                    <button id="srch-crm" className="btn btn-danger w-100" type="submit">Search</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  </header>
  )
};

export default Header;