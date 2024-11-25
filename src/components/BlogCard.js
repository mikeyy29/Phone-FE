import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
                </div>
                <div className="blog-content">
                    <p className="date">Ngày 22 tháng 9 năm 2023</p>
                    <h5 className="title">Một buổi trà chiều</h5>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque quaerat accusamus off....
                    </p>
                    <Link to="/blog/:id" className="button">Đọc thêm</Link>
                </div>
            </div>
    );
};

export default BlogCard