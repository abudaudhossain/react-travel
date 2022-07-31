import React from 'react'
import "./feature.css"

const Feature = ({ feature }) => {
  return (
    <div class="col-lg-4 col-md-4 col-sm-6">
      <div class="item-icon-box text-center">
        <div class="item-image">
          <img src={feature.img} alt="img" />
        </div>
        <h4><a href="#">{feature.title}</a></h4>
        <p>{feature.describe}</p>
        <div class="cta-btn">
          <a href="#" class="gs-btn gs-btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  )
}

export default Feature