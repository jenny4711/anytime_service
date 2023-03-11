import React from 'react'
import {Link, useNavigate } from "react-router-dom"
import './Navb.css';


const menuList=['About',"Service","Contact","Feedback"]



const Navb = () => {
  return (
    <div className='menu-area'>
      <ul className='menu-list'>
      <Link className='nav-home' to="/"><li>HOME</li></Link>
      <Link className='nav-link' to="/about"><li>회사정보</li></Link>
      <Link className='nav-link' to="/service"><li>서비스</li></Link>
      <Link className='nav-link' to="/contact"><li>연락처</li></Link>
      <Link className='nav-link' to="/feedback"><li>후기</li></Link>
      </ul>
    </div>
  )
}

export default Navb