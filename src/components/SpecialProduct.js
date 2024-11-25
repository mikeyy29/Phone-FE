import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

export const SpecialProduct = () => {
    return (
        <div className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div>
                        <div className="special-product-content">
                            <h5 className="brand">Havels</h5>
                            <h6 className="title">Samsung Galaxy Note10+ Mobile Phone....</h6>
                            <ReactStars
                                count={5}
                                value={4}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <p className="price">
                                <span className="req-p">2.000.000đ</span> &nbsp; <strike>3.000.000đ</strike>
                            </p>
                            <div className="discount-till d-flex align-items-center gap-15">
                                <p className="mb-0">
                                    <b>5 ngày</b>
                                </p>
                                <div className="d-flex gap-10 align-items-center">
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>
                                </div>
                            </div>
                            <div className="prod-count my-3">
                                <p>Sản phẩm: 5</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <Link className="button">Lựa chọn</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
