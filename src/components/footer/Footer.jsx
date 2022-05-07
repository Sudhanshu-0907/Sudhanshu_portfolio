import React from 'react'
import "./footer.css"
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Sudhanshu Singh</a>

      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100006428055948" target="_blank"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/sudhanshu_.singh_/" target="_blank"><AiFillInstagram/></a>
        <a href="https://twitter.com/Sudhanshu0907" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Sudhanshu Singh. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer