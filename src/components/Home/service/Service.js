import React from 'react'

const Service = ({ service }) => {
    return (
        <div class="service-content">
            <div class="icon-box">
                <img src={service.img} alt="img" />
            </div>
            <div class="content">
                <h5><a href="#">{service.title}</a></h5>
                <p>
                    {
                        service.describe
                    }
                </p>
            </div>
        </div>
    )
}

export default Service