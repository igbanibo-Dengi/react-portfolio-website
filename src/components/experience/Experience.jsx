import React from 'react'
import './experience.css'
import {ImHtmlFive2} from 'react-icons/im'
import {RiCss3Fill} from 'react-icons/ri'
import {IoLogoJavascript} from 'react-icons/io'
import {BiGitMerge} from 'react-icons/bi'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandBootstrap} from 'react-icons/tb'
import {TbBrandTypescript} from 'react-icons/tb'
import {FaVuejs} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Have To Offer</h5>
      <h2>My Skills</h2>

      <div className="container skills-container">
        <ImHtmlFive2 className='skills-icon'/>
        <RiCss3Fill className='skills-icon'/>
        <IoLogoJavascript className='skills-icon'/>
        <BiGitMerge className='skills-icon'/>
        <FaReact className='skills-icon'/>
        <SiTailwindcss className='skills-icon'/>
        <TbBrandBootstrap className='skills-icon'/>
        <TbBrandTypescript className='skills-icon'/>
        <FaVuejs className='skills-icon'/>
      </div>
    </section>
  )
}

export default Experience