import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from '../images/watch-1.jpg'
import { AiFillDelete } from "react-icons/ai";
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <Meta title={"Giỏ hàng"}></Meta>
            <BreadCrumb title="Giỏ hàng" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className='cart-col-1'>Sản phẩm</h4>
                            <h4 className='cart-col-2'>Giá</h4>
                            <h4 className='cart-col-3'>Số lượng</h4>
                            <h4 className='cart-col-4'>Tổng tiền</h4>
                        </div>
                        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img src={watch} className='img-fluid' alt='watch' />
                                </div>
                                <div className='w-75'>
                                    <p>Đồng hồ SmartWatch</p>
                                    <p>Kích cỡ: </p>
                                    <p>Màu sắc: </p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price'>2.000.000đ</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input type="number" name='' id='' min={1} max={10} className='form-control' />
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger' />
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className='price'>2.000.000đ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className="button">Tiếp tục mua sắm</Link>
                        </div>
                        <div className='d-flex flex-column align-items-end'>
                            <h4>Tổng tiền: 2.000.000đ</h4>
                            <p>Thuế và phí vận chuyển được tính khi thanh toán</p>
                            <Link to="/checkout" className="button">Thanh toán</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart