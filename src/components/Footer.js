import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsYoutube, BsTiktok  } from "react-icons/bs";
import newsletter from '../images/newsletter.png';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Đăng ký nhận tin khuyến mãi</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Nhập địa chỉ email..." aria-label="Nhập địa chỉ email..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Đăng ký</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Liên hệ với chúng tôi</h4>
              <div>
                <address className="text-white fs-6"> 
                  Ngõ 257, Phố Vọng, Cầu Giấy, Hà Nội 
                  <br/> Mã code: 11011
                </address>
                <a href="tel: +84 947085421" className="mt-3 d-block mb-1 text-white">
                  SDT liên hệ: +84 947085421
                </a>
                <a href="mailto: quyenpham22445@gmail.com" className="mt-2 d-block mb-0 text-white">
                  Email: quyenpham22445@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://www.facebook.com/profile.php?id=100021031890531">
                    <BsFacebook className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://www.instagram.com/quyenpham22445/">
                    <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://www.tiktok.com/@phamquyen22445">
                    <BsTiktok className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://www.youtube.com/@masterkchannel7468">
                    <BsYoutube className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Thông tin</h4>
              <div className="footer-links d-flex flex-column">
                <Link to='/privacy-policy' className="text-white py-2 mb-1">Chính sách bảo mật</Link>
                <Link to='/refund-policy' className="text-white py-2 mb-1">Chính sách hoàn trả</Link>
                <Link to='/shipping-policy' className="text-white py-2 mb-1">Chính sách vận chuyển</Link>
                <Link to='/term-conditions' className="text-white py-2 mb-1">Điều khoản dịch vụ</Link>
                <Link className="text-white py-2 mb-1">Tin tức</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Tài khoản</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Về chúng tôi</Link>
                <Link className="text-white py-2 mb-1">Câu hỏi</Link>
                <Link className="text-white py-2 mb-1">Liên hệ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Liên kết nhanh</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Tai nghe</Link>
                <Link className="text-white py-2 mb-1">Máy tính bảng</Link>
                <Link className="text-white py-2 mb-1">Đồng hồ</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}. Powered by Developer Leywin
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer