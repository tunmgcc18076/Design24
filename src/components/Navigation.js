import React from 'react'

const Navigation = () => {
    const navLinkStyle = { color:'white'}
    return(
        <nav>
            <img src="https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png" width="80px" />
            <ul className='nav-link'>
                <li>
                    <a href='/' style={navLinkStyle}>Lịch khai giảng</a>
                </li>
                <li >
                    <a href='/do-hoa-chuyen-nganh'  style={navLinkStyle}>Đồ họa chuyên ngành</a>
                </li>
                <li>
                    <a href='/Khoa-dai-han'  style={navLinkStyle}>Khóa dài hạn </a>
                </li>
                <li >
                    <a href='/Khoa-ngan-han'  style={navLinkStyle}>Khóa ngắn hạn</a>
                </li>
            </ul>
        </nav>
    )
}


export default Navigation