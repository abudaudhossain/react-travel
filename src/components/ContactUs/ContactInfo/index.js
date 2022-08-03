import React from 'react'
import ContactForm from '../ContactForm'
import "./contactInfo.css"

const index = () => {
    return (
        <section class="contact-page">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="single-border text-left">
                            <div class="sub-title">
                                <h5>Contact With Us</h5>
                            </div>
                            <h2>If you Have any query, Dont Hesitate <br /> Contact with us</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <div class="contact-inform">
                            <div class="address d-flex align-items-center">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="information">
                                    <h4>Office Address</h4>
                                    46 suvastu arcade, 3rd Floor <br />
                                    palace road, London.
                                </div>
                            </div>
                            <div class="address d-flex align-items-center">
                                <i class="fas fa-phone"></i>
                                <div class=" information">
                                    <h4>Phone</h4>
                                    <a href="tel:+882562562584">88 256 256 2584</a>
                                    <br />
                                    <a href="tel:+882562562584">88 256 256 2584</a>
                                </div>
                            </div>
                            <div class="address d-flex align-items-center">
                                <i class="fas fa-envelope-open"></i>
                                <div class=" information">
                                    <h4>Email</h4>
                                    <a href="mailto:info@example.com">info@example.com</a>
                                    <br />
                                    <a href="mailto:info@example.com">info@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index