import React from 'react'
import './contact.css'
import CV from '../../assets/igbanibo-alex.pdf'
import { MdOutlineMail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nagsq69', 'template_5dzpj17', form.current, 'KBMwY4REo2bDCuKMh')

    e.target.reset()
  };

  return (
    <section id='contact' className='container'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        {/* ===============-contact options-=================== */}
        <div className="contact-cards">
          <article className="contact-option">
            <MdOutlineMail className='contact-icon' />
            <h4>Email</h4>
            <h5>Igbanibodengi@gmail.com</h5>
            <a href="mailto:igbanibodengi@gmail.com">Send a message</a>
          </article>
          <div className='contact-socials'>
            <a href="https://www.linkedin.com/in/igbanibodengi/" target='blank'><AiFillLinkedin className='social-icons' /></a>
            <a href="https://github.com/igbanibo-Dengi?tab=repositories" target='blank'><FaGithubSquare className='social-icons' /></a>
            <a href="https://twitter.com/IgbaniboD" target='blank'><AiFillTwitterSquare className='social-icons' /></a>
          </div>
          <div className='cta contact-cv'>
            <a href={CV} download className='btn'>Download CV</a>
          </div>
        </div>
        {/* ===============form================ */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Message me here.'></textarea>
          <button type='submit' className='btn btn-primary'>Send Mssage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact