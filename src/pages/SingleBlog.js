import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from '../images/blog-2.jpg'
import Container from '../components/Container'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Tin tức 1"}></Meta>
            <BreadCrumb title="Tin tức 1" />
            <Container class1="blog-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4' /> Quay lại</Link>
                            <h3 className='title'>Một buổi trà chiều</h3>
                            <img src={blog} alt="blog" className='img-fluid w-100 my-4' />
                            <p>Một buổi trà chiều ấm cúng luôn mang lại cảm giác thư thái và nhẹ nhàng. Trong ánh nắng vàng dịu cuối ngày, tôi cùng những người thân yêu quây quần bên một bàn trà được bày biện tinh tế. Chiếc ấm trà sứ trắng nhã nhặn tỏa ra hương thơm dịu dàng của trà hoa nhài, hòa quyện với mùi bánh nướng mới ra lò. Những chiếc bánh macaron ngọt ngào đủ màu sắc, vài lát bánh tart chanh chua nhẹ, và đĩa trái cây tươi làm cho không gian thêm phần sinh động.</p>

                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog