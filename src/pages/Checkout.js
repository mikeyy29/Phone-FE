import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import watch from '../images/watch.jpg'
import Container from '../components/Container'; // updated path to your Container component

const Checkout = () => {
    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className='row'>
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">X Phones</h3>
                            <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className='text-dark total-price' to="/cart">Giỏ hàng</Link></li> &nbsp; {`>`}
                                    <li className="breadcrumb-item total-price active" aria-current="page">Thông tin</li> &nbsp; {`>`}
                                    <li className="breadcrumb-item total-price active">Vận chuyển</li> &nbsp; {`>`}
                                    <li className="breadcrumb-item total-price active" aria-current="page">Thanh toán</li>
                                </ol>
                            </nav>
                            <h4 className='title total'>Thông tin liên lạc</h4>
                            <p className='user-details total'>
                                Pham Quyen (quyenpham22445@gmail.com)
                            </p>
                            <h4 className='mb-3'>Địa chỉ vận chuyển</h4>
                            <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value="" selected disabled>Quốc gia</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className='form-control' placeholder='Họ' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className='form-control' placeholder='Tên' />
                                </div>
                                <div className='w-100'>
                                    <input type="text" className='form-control' placeholder='Địa chỉ' />
                                </div>
                                <div className='w-100'>
                                    <input type="text" className='form-control' placeholder='Số nhà' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className='form-control' placeholder='Thành phố' />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value="" selected disabled>Quận/Huyện</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className='form-control' placeholder='Zip Code' />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark"><IoMdArrowRoundBack className='me-1' /> Quay lại giỏ hàng</Link>
                                        <Link to="/cart" className="button">Tiếp tục vận chuyển</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 mb-2 align-items-center'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{ "top": "-10px", "right": "2px" }} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                        <img src={watch} className='img-fluid' alt='watch' />
                                    </div>
                                    <div>
                                        <h5 className='total-price'>Đồng hồ</h5>
                                        <p className='total-price'>S / #EDEDED</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>2.000.000đ</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Thành tiền</p>
                                <p className='total-price'>2.000.000đ</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Vận chuyển</p>
                                <p className='mb-0 total-price'>13.000đ</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Tổng tiền</h4>
                            <h5 className='total-price'>2.013.000đ</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout