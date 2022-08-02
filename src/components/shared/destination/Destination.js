import React from 'react'
import "./destination.css"

const Destination = ({ destination }) => {
    return (
        <div class="col-md-6 col-lg-4 col-sm-6">
            <div class="destination-item-content">
                <div class="image">
                    <img src={destination.img} alt="destination" />
                </div>
                <div class="item-overlay">
                    <div class="content">
                        <h4><a href="#">{destination.name}</a></h4>
                        <div class="content-wrapper">
                            <div class="content-meta d-flex align-items-center">
                                <div class="meta">
                                    <i class="ti-location-pin"></i>
                                    {destination.cities} Cities
                                </div>
                                <div class=""><i class="ti-eye"></i>
                                    20+ Tour Places
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination