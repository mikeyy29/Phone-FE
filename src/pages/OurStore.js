import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import Color from '../components/Color';
import { ProductCard } from "../components/ProductCard";
import Container from '../components/Container';

export const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"Cửa hàng"}></Meta>
            <BreadCrumb title="Cửa hàng" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Danh mục</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Đồng hồ</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Máy tính</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Lọc sản phẩm</h3>
                            <div>
                                <h5 className="sub-title">Khả dụng</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label" htmlFor="">
                                            Còn hàng (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label" htmlFor="">
                                            Hết hàng (0)
                                        </label>
                                    </div>
                                </div>

                                <h5 className="sub-title">Giá (VND)</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Từ" />
                                        <label for="floatingInput">Từ</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput1" placeholder="Đến" />
                                        <label for="floatingInput1">Đến</label>
                                    </div>

                                </div>

                                <h5 className="sub-title">Màu sắc</h5>
                                <div>
                                    <Color />
                                </div>

                                <h5 className="sub-title">Kích cỡ</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-1" />
                                        <label className="form-check-label" htmlFor="color-1">
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            L (0)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            XL (0)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            XXL (0)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Tai nghe
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Máy tính xách tay
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Oppo
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Đồng hồ
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Điện thoại
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Máy tính bảng
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Sản phẩm ngẫu nhiên</h3>
                            <div>
                                <div className="random-products mb-3 d-flex gap-2">
                                    <div className="w-50">
                                        <img src="images/watch-2.png" className="img-fluid" alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Rolex Submariner Date 40mm Stainless Steel and Gold Blue 116613LB-0005
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                        <b>430.000.000 đ</b>
                                    </div>
                                </div>

                                <div className="random-products d-flex gap-2">
                                    <div className="w-50">
                                        <img src="images/sound.webp" className="img-fluid" alt="loa bluetooh" />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Loa Bluetooth Đĩa Than Cổ Điển Retro Vinyl
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                        <b>260.000 đ</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ "width": "150px" }}>Sắp xếp theo:</p>
                                    <select name="" defaultValue={"manual"} className="form-control form-select" id="">
                                        <option value="manual">Nổi bật nhất</option>
                                        <option value="best-selling">Bán chạy nhất</option>
                                        <option value="title-ascending">Từ A-Z</option>
                                        <option value="title-descending">Từ Z-A</option>
                                        <option value="price-ascending">Giá, từ cao đến thấp</option>
                                        <option value="price-descending">Giá, từ thấp đến cao</option>
                                        <option value="created-ascending">Ngày, từ cũ đến mới</option>
                                        <option value="created-descending">Ngày, từ mới đến cũ</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts mb-0">21 sản phẩm</p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img onClick={() => { setGrid(3); }} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                                        <img onClick={() => { setGrid(4); }} src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                                        <img onClick={() => { setGrid(6); }} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                                        <img onClick={() => { setGrid(12); }} src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default OurStore