import React from 'react'
import "./banner.css"

import bannerImg from "../../../assets/images/banner/banner-img-1.jpg"

function Banner() {
    return (
        <div className="banner-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <h1>Discover Amazing Places of the World....</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="banner-btn">
                                <a href="#" className="gs-btn gs-btn-primary">Explore Now</a>
                                <div className="video-btn">
                                   
                                    <div className="fancy-box">
                                        <figure className="video-box round-os">
                                            <a data-fancybox data-width="640" data-height="360" className="video-btn" href="https://youtu.be/MPUBSZYESgU"
                                            ><i className="fas fa-play"></i>Watch Now</a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-image">
                            <img src={bannerImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner