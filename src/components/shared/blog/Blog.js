import React from 'react'
import "./blog.css"

const Blog = ({blog}) => {
    return (
        <div class="blog-item">
            <div class="image">
                <img src={blog.img} alt="blog" />
            </div>
            <div class="item-content">
                <h5>{blog.author}</h5>
                <h4><a href="#">{blog.title}</a></h4>
                <p>{
                    blog.description
                    }</p>
                <div class="meta-content">
                    <a href="#"><i class="far fa-user"></i>City Admin</a>| <span><i class="far fa-calendar-alt"></i>{blog.date}</span>|
                    <span><i class="far fa-comments"></i>50</span>
                </div>
            </div>
        </div>
    )
}

export default Blog