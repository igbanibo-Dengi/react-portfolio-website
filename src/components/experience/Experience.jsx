import React from "react";
import "./experience.css";
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { BiGitMerge } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Have To Offer</h5>
      <h2>My Skills</h2>

      <div className="container skills-container">
        <div className="skill-box">
          <ImHtmlFive2 className="skills-icon" />
          <p className="icon-text">HTML</p>
        </div>
        <div className="skill-box">
          <RiCss3Fill className="skills-icon" />
          <p className="icon-text">CSS</p>
        </div>
        <div className="skill-box">
          <IoLogoJavascript className="skills-icon" />
          <p className="icon-text">JAVASCRIPT</p>
        </div>

        <div className="skill-box">
          <BiGitMerge className="skills-icon" />
          <p className="icon-text">VERSION CONTROL</p>
        </div>
        <div className="skill-box">
          <FaReact className="skills-icon" />
          <p className="icon-text">REACT.JS</p>
        </div>
        <div className="skill-box">
          <SiTailwindcss className="skills-icon" />
          <p className="icon-text">TALWIND CSS</p>
        </div>
        <div className="skill-box">
          <TbBrandBootstrap className="skills-icon" />
          <p className="icon-text">BOOTSTRAP</p>
        </div>
        <div className="skill-box">
          <TbBrandTypescript className="skills-icon" />
          <p className="icon-text">TYPESCRIPT</p>
        </div>
        <div className="skill-box">
          <TbBrandNextjs className="skills-icon" />
          <p className="icon-text">NEXT.JS</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
