import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { BiLibrary } from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About ME</h2>

      <div className="container">
        <div className='about-container'>
          <div className="about-me">
            <div className="about-me-img">
              <img src={ME} alt="About" />
            </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className='about-card'>
                <FaAward className='about-icon' />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className='about-card'>
                <BiLibrary className='about-icon' />
                <h5>Projects</h5>
                <small>10+ Completed </small>
              </article>
            </div>

            <p>
              Detail-oriented Front End Developer with experience building effective, scalable, and responsive webpages. Highly adept at both independent and collaborative projects.
            </p>
          </div>
        </div>

        <div className='about-me-btn'>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About