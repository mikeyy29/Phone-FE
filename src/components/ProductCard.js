import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import wishlist from '../images/wishlist.svg';
import watch from '../images/watch-1.jpg';
import watch2 from '../images/watch-3.webp';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';

export const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to={`${location.pathname !== "/" ? "/product/:id" : location.pathname == "/product/:id" ? "/product/:id" : ":id"}`} className="product-card position-relative">
                    <div className="product-image">
                        <img src={watch2} className="img-fluid" alt="product img" />
                        <img src={watch} className="img-fluid" alt="product img" />
                        <div className="wishlist-icon position-absolute">
                            <button className='border-0 bg-transparent'>
                                <img src={wish} alt="wishlist" />
                            </button>
                        </div>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havells</h6>
                        <h5 className="product-title">
                            Apple Watch Series 8 Nhôm GPS 45mm Midnight VN/A
                        </h5>
                        <ReactStars
                            count={5}
                            value={4}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}    >
                            Apple Watch Series 8 Nhôm GPS 45mm Midnight VN/A là một chiếc đồng hồ thông minh cao cấp với thiết kế nhôm thanh lịch, màu midnight sang trọng. Sản phẩm sở hữu màn hình lớn, sắc nét, dễ nhìn dưới ánh sáng ngoài trời. Tích hợp GPS...
                        </p>
                        <p className="price">11.790.000đ</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to={`${location.pathname !== "/" ? "/product/:id" : location.pathname == "/product/:id" ? "/product/:id" : ":id"}`} className="product-card position-relative">
                    <div className="product-image">
                        <img src={watch2} className="img-fluid" alt="product img" />
                        <img src={watch} className="img-fluid" alt="product img" />
                        <div className="wishlist-icon position-absolute">
                            <button className='border-0 bg-transparent'>
                                <img src={wish} alt="wishlist" />
                            </button>
                        </div>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havells</h6>
                        <h5 className="product-title">
                            Apple Watch Series 8 Nhôm GPS 45mm Midnight VN/A
                        </h5>
                        <ReactStars
                            count={5}
                            value={4}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}    >
                            Apple Watch Series 8 Nhôm GPS 45mm Midnight VN/A là một chiếc đồng hồ thông minh cao cấp với thiết kế nhôm thanh lịch, màu midnight sang trọng. Sản phẩm sở hữu màn hình lớn, sắc nét, dễ nhìn dưới ánh sáng ngoài trời. Tích hợp GPS...
                        </p>
                        <p className="price">11.790.000đ</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
