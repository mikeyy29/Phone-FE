import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import { ProductCard } from '../components/ProductCard';
import { SpecialProduct } from '../components/SpecialProduct';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>Máy mới lên sàn</h4>
                <h5>iPad S13+ Pro</h5>
                <p>Giá chỉ từ 29.999.000đ</p>
                <Link className="button">Mua ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Bán chạy nhất</h4>
                  <h5>Laptop Max</h5>
                  <p>Giá chỉ từ 14.999.000đ</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Mặt hàng mới</h4>
                  <h5>Smart Watch 7</h5>
                  <p>Giá chỉ từ 1.999.000đ</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Giảm giá 15%</h4>
                  <h5>iPad Air</h5>
                  <p>Giá chỉ từ 19.999.000đ</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Quà tặng</h4>
                  <h5>AirPods Max</h5>
                  <p>Tần số quét cao <br /> và độ trễ thấp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt="service" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Máy ảnh</h6>
                  <p>10 mặt hàng</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>5 mặt hàng</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>3 mặt hàng</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Tai Nghe</h6>
                  <p>8 mặt hàng</p>
                </div>
                <img src="images/headphone.jpg" alt="headphone" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Máy ảnh</h6>
                  <p>10 mặt hàng</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>5 mặt hàng</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>3 mặt hàng</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Tai Nghe</h6>
                  <p>8 mặt hàng</p>
                </div>
                <img src="images/headphone.jpg" alt="headphone" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Bộ sưu tập nổi bật
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famus-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-1.webp" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Đồng hồ thông minh</h5>
                <h6>Smart Watch 7</h6>
                <p>Giá chỉ từ 1.999.000đ</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-2.webp" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Màn hình lớn</h5>
                <h6 className="text-dark">Macbook Air</h6>
                <p className="text-dark">Màn hình 27-inc full HD 5K</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-3.webp" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Điện thoại thông minh</h5>
                <h6 className="text-dark">Smartphone 13 pro</h6>
                <p className="text-dark">Giá chỉ từ 49.999.000đ</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-4.webp" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Loa Bluetooh</h5>
                <h6 className="text-dark">HomePod 2</h6>
                <p className="text-dark">Giá chỉ từ 7.499.000đ</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Mặt hàng giảm giá</h3>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Tin tức mới nhất
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home