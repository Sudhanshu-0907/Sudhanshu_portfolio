import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {SiCodechef} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/sudhanshu-s-532553137/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Sudhanshu-0907" target="_blank"><BsGithub/></a>
        <a href="https://www.codechef.com/users/sudhanshu_0907" target="_blank"><SiCodechef/></a>

    </div>
  )
}

export default HeaderSocials