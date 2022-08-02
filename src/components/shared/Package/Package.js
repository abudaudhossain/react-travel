import React from 'react'
import "./package.css"
import img from "../../../assets/images/popular/1.jpg"
const Package = () => {
    return (
        <div className="popular-pack-block">
            <div className="item-image">
                <img src={img} alt="img" />
                <div className="ribbon">$200</div>
            </div>
            <div className="item-content">
                <h4><a href="#">Brazil Sea Beach</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...</p>
                <div className="location">
                    <i className="fa-solid fa-location-dot pe-1"></i>
                    <span>Praia do cassinobeach, Brazil</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="days">
                        <span>5 days - 4 night</span>
                    </div>
                    <div className="review">

                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>

                        <span className="enrolled">(20)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Package