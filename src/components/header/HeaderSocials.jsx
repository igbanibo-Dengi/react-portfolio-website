import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillTwitterSquare } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="https://www.linkedin.com/in/igbanibodengi/" target='blank'><AiFillLinkedin className='social-icons' /></a>
      <a href="https://github.com/igbanibo-Dengi?tab=repositories" target='blank'><FaGithubSquare className='social-icons' /></a>
      <a href="https://twitter.com/IgbaniboD" target='blank'><AiFillTwitterSquare className='social-icons' /></a>
    </div>
  )
}

export default HeaderSocials