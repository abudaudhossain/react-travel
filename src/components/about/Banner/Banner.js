import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <section class="video-bg-section v2 container my-3">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="video-bg round">
                            <div class="fancy-box">
                                <figure class="video-box round-os">
                                    <a data-fancybox data-width="640" data-height="360" class="video-btn"
                                        href="https://youtu.be/MPUBSZYESgU"><i class="fas fa-play"></i></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner