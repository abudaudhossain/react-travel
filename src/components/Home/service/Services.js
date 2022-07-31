import React from 'react'
import Service from './Service'

import "./services.css"

import Airline from "../../../assets/images/service/1.png"
import Transport from "../../../assets/images/service/2.png"
import Hotel from "../../../assets/images/service/4.png"
import bg from "../../../assets/images/service/bg.png"

const services = [
  {
    title: "Airline Service",
    describe: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: Airline
  },
  {
    title: "Transport Service",
    describe: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: Transport
  },
  {
    title: "Hotel Service",
    describe: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: Hotel
  }
]

const Services = () => {
  return (
    <section class="service-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="item-title">
              <h2>We Provied on demand vehicle rental solution For Our Travelers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
            
            { 
              services.map((service, index) => <Service key={index} service={service} />)
            }
          </div>
          <div class="col-lg-6">
            <div class="service-img">
              <img src={bg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services