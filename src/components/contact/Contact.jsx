import React from 'react'
import "./Contact.css"
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vl0dk2u', 'template_alv5nje', form.current, 'gDGscCumlzJJ97UkS')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          
        <article className='contact_option'>
            <MdEmail className='icon'/>
            <h4>Email</h4>
            <h5>SudhanshuSingh0907@gmail.com</h5>
            <a href="mailto:SudhanshuSingh0907@gmail.com" target="_blank">Send a message</a>
          </article>
            
        <article className='contact_option'>
            <BsMessenger className='icon'/>
            <h4>Messenger</h4>
            <h5>Sudhanshu Singh</h5>
            <a href="https://m.me/Sudhanshu0907"  target="_blank">Send a message</a>
          </article>
  
          <article className='contact_option'>
            <BsWhatsapp className='icon'/>
            <h4>Whatsapp</h4>
            <h5>9695597830</h5>
            <a href="https://api.whatsapp.com/send?phone=965597830" target="_blank">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Enter message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact