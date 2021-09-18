import React from 'react'

import Navbar from './landingPage/Navbar'
import Header from './landingPage/Header'
import Domain from './landingPage/domains/index'
import Footer from './landingPage/footer/index'
import Toppage from './landingPage/toppage'
import Features from './landingPage/features'
import Testimonials from './landingPage/testimonials'


function homepage() {
    return (
        <>
            <Navbar />
            <Toppage />
            <Features />
            <Header />
            <Domain />
            <Testimonials />
            <Footer />
        </>
    )
}

export default homepage
