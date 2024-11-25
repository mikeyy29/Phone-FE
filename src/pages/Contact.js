import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall, FiInfo } from "react-icons/fi";
import Container from '../components/Container';


const Contact = () => {
  return (
    <>
      <Meta title={"Liên Hệ"}></Meta>
      <BreadCrumb title="Liên Hệ" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14997.698024874102!2d106.07441419785698!3d19.99069050258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31366a3fcce46d27%3A0xd7791b27c06bd6d!2zQ-G7k24gVGhvaSwgS2ltIFPGoW4sIE5pbmggQsOsbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1732026450704!5m2!1svi!2s" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Liên hệ</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' className='form-control' placeholder='Họ Tên' />
                  </div>
                  <div>
                    <input type='email' className='form-control' placeholder='Email' />
                  </div>
                  <div>
                    <input type='tel' className='form-control' placeholder='Số điện thoại' />
                  </div>
                  <div>
                    <textarea className='form-control w-100' cols='30' rows='4' placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Gửi</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Liên hệ với chúng tôi</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>
                        Ngõ 257, Phố Vọng, Cầu Giấy, Hà Nội
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FiPhoneCall className='fs-5' />
                      <a href='tel: +84 947085421'>+84 947085421</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href='mailto:quyenpham22445@gmail.com'>
                        quyenpham22445@gmail.com
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FiInfo className='fs-5' />
                      <p className='mb-0'>
                        Thứ 2 - Thứ 6: 8:00 - 17:00
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact