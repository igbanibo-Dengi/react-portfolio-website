import React from "react";
import './header.css'
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials";


const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <h5>Hello, I'm</h5>
        <h1>Igbanibo Dengi Alex</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="header-img">
        </div>
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}
















export default Header