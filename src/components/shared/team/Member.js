import React from 'react'

const Member = ({member}) => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-6 col-xm-6">
            <div class="inner-box">
                <div class="image-box">
                    <figure class="image">
                        <img src={member.img} alt="team" />
                        <div class="social-links">
                            <div class="caption-box">
                                <h4 class="name"><a href="#">{member.name}</a></h4>
                                <span class="designation">{member.title}</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="#"><span class="fab fa-facebook-f"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span class="fab fa-twitter"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span class="fab fa-linkedin-in"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                </li>
                            </ul>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Member