import React from 'react'
import "./About.css"
import ME from "../../assets/me_ful.jpg"
import {BsAwardFill} from 'react-icons/bs'
import {BsFillLaptopFill} from 'react-icons/bs'
import {AiFillFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <BsFillLaptopFill/>
                <h5>Questions</h5>
                <small>1000+ solved</small>
              </article>

              <article className='about_card'>
                <BsAwardFill/>
                <h5>Experience</h5>
                <small>3+ Year Coding</small>
              </article>

              <article className='about_card'>
                <AiFillFolderOpen/>
                <h5>Projects</h5>
                <small>3+ Completed</small>
              </article>
            </div>

            <p>Myself Sudhanshu Singh from Varanasi, India. I am 3rd year student of Computer Science branch in Madan Mohan Malaviya University Of technology.I am C++ coder and FullStack Developer and my hobbies are playing basketball and sketching.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
      </section>
  )
}

export default about