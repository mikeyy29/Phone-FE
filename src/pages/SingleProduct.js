import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { ProductCard } from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Container from '../components/Container';

const SingleProduct = () => {
    const props = { width: 400, height: 600, zoomWidth: 600, img: "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/dong-ho-rolex-oyster-perpetual-datejust-gia-bao-nhieu.jpg" };
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title={"Sản phẩm 1"}></Meta>
            <BreadCrumb title="Sản phẩm 1" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div>
                                <img src='https://donghoduyanh.com/images/news/2024/01/10/large/rolex-datejust-0_1704851196.jpg' className='img-fluid' alt='watch' />
                            </div>
                            <div>
                                <img src='https://donghoduyanh.com/images/news/2024/01/10/large/rolex-datejust-0_1704851196.jpg' className='img-fluid' alt='watch' />
                            </div>
                            <div>
                                <img src='https://donghoduyanh.com/images/news/2024/01/10/large/rolex-datejust-0_1704851196.jpg' className='img-fluid' alt='watch' />
                            </div>
                            <div>
                                <img src='https://donghoduyanh.com/images/news/2024/01/10/large/rolex-datejust-0_1704851196.jpg' className='img-fluid' alt='watch' />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>Đồng hồ Rolex Oyster Perpetual Datejust</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">4.000.000.000đ</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        value={4}
                                        edit={false}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review product-data"'>(2 đánh giá)</p>
                                </div>
                                <a className='review-btn' href="#review">Viết đánh giá</a>
                            </div>
                            <div className="border-bottom">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Loại: </h3>
                                    <p className="product-data">Đồng hồ</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Thương hiệu: </h3>
                                    <p className="product-data">Rolex</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Danh mục: </h3>
                                    <p className="product-data">camera, đồng hồ điện tử, laptop</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Thẻ: </h3>
                                    <p className="product-data">đồng hồ</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Khả dụng: </h3>
                                    <p className="product-data">còn hàng</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Kích cỡ: </h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Màu sắc: </h3>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Số lượng: </h3>
                                    <div className="">
                                        <input type="number" min={1} max={10} className='form-control' style={{ width: "70px" }} name='' id='' />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>Thêm vào giỏ hàng</button>
                                        <button className='signup button'>Mua ngay</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href=""><GoGitCompare className='fs-6 me-0 mb-1' /> Thêm vào so sánh</a>
                                    </div>
                                    <div>
                                        <a href=""><FaRegHeart className='fs-6 me-0 mb-1' /> Thêm vào yêu thích</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Vận chuyển và hoàn trả: </h3>
                                    <p className="product-data">
                                        Miễn phí vận chuyển và hoàn trả với mọi đơn hàng! <br />
                                        chúng tôi giao tất cả các đơn hàng trong nước trong vòng 24 giờ <br />
                                        và giao hàng quốc tế trong vòng 3-5 ngày.
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Liên kết sản phẩm: </h3>
                                    <a href="javascript:void(0)" onClick={() => copyToClipboard("https://image.donghohaitrieu.com/wp-content/uploads/2023/09/dong-ho-rolex-oyster-perpetual-datejust-gia-bao-nhieu.jpg")}>
                                        Sao chép liên kết
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Mô tả</h4>
                        <div className='bg-white p-3'>
                            <p className='bg-white p-3'>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="reviews-wrapper home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id='review'>Đánh giá</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Đánh giá của khách hàng</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Dựa trên 2 đánh giá</p>
                                    </div>
                                </div>
                                <div>
                                    {
                                        orderedProduct && (
                                            <a className='text-dark text-decoration-underline' href="">Viết đánh giá</a>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='review-form py-4'>
                                <h4>Viết đánh giá</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={true}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea className='form-control w-100' cols='30' rows='4' placeholder='Comments'></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Gửi</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Long Nguyễn</h6>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Mặt hàng phổ biến
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                </div>
            </Container>
        </>
    )
}

export default SingleProduct