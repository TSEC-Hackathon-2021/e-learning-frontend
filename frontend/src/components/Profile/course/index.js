import React from 'react'
import './style.css'

function index() {
    return (
        <>
            <div class="blog-card alt">
                <div class="meta">
                <div class="photo" style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"}}></div>
                <ul class="details">
                    <li class="author"><a href="/">John Doe</a></li>
                    <li class="date">Aug. 24, 2015</li>
                    <li class="tags">
                    <ul>
                        <li><a href="/">Learn</a></li>
                        <li><a href="/">Code</a></li>
                        <li><a href="/">HTML</a></li>
                        <li><a href="/">CSS</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <div class="description">
                <h3>Learning to Code</h3>
                <span class="recipe-rating">★★★★<span>☆</span></span>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p class="read-more">
                    <a href="/">Read More</a>
                </p>
                </div>
            </div>
        </>
    )
}

export default index
