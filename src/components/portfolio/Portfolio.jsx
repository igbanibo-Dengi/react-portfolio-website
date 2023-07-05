import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.png";
import DippsImg from "../../assets/dipps.png";

import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { BiGitMerge } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";

const data = [
  {
    id: 1,
    Image: IMG6,
    title: "MCU",
    github: "https://github.com/igbanibo-Dengi/mcu-database",
    demo: "https://marvelcinematicuniversedatabase.netlify.app/",
    icons: [
      <FaReact key="react" className="project-icon" />,
      <SiTailwindcss key="tailwind" className="project-icon" />,
      <ImHtmlFive2 key="html" className="project-icon" />,
    ],
  },
  {
    id: 2,
    Image: DippsImg,
    title: "Dipps Beautifyers",
    github: "https://github.com/igbanibo-Dengi/dipps-",
    demo: "https://dipps.netlify.app/",
    icons: [
      <FaReact key="react" className="project-icon" />,
      <SiTailwindcss key="tailwind" className="project-icon" />,
      <ImHtmlFive2 key="html" className="project-icon" />,
      <TbBrandFramerMotion key="framer" className="project-icon" />,
    ],
  },
  {
    id: 3,
    Image: IMG1,
    title: "Nexus Gaming",
    github: "https://github.com/igbanibo-Dengi/nexus-gaming",
    demo: "https://nexusgaming.netlify.app/",
    icons: [
      <TbBrandBootstrap key="bootstrap" className="project-icon" />,
      <ImHtmlFive2 key="html" className="project-icon" />,
      <RiCss3Fill key="css" className="project-icon" />,
      <IoLogoJavascript key="javascript" className="project-icon" />,
    ],
  },

  {
    id: 4,
    Image: IMG2,
    title: "ShortLinked",
    github: "https://github.com/igbanibo-Dengi/Shortly",
    demo: "https://shortlinked.netlify.app/",
    icons: [
      <ImHtmlFive2 key="html" className="project-icon" />,
      <RiCss3Fill key="css" className="project-icon" />,
      <IoLogoJavascript key="javascript" className="project-icon" />,
    ],
  },
  {
    id: 5,
    Image: IMG3,
    title: "Home Lander BnB",
    github: "https://github.com/igbanibo-Dengi/Home-lander-BNB",
    demo: "https://homelanderbnb.netlify.app/",
    icons: [
      <ImHtmlFive2 key="html" className="project-icon" />,
      <RiCss3Fill key="css" className="project-icon" />,
      <IoLogoJavascript key="javascript" className="project-icon" />,
    ],
  },
  {
    id: 6,
    Image: IMG4,
    title: "Manage landing Page",
    github: "https://github.com/igbanibo-Dengi/manager",
    demo: "https://managetwc.netlify.app/",
    icons: [
      <ImHtmlFive2 key="html" className="project-icon" />,
      <SiTailwindcss key="tailwind" className="project-icon" />,
    ],
  },
  {
    id: 7,
    Image: IMG5,
    title: "Counter App",
    github: "https://github.com/igbanibo-Dengi/counter-web-app",
    demo: "https://count-el.netlify.app/",
    icons: [
      <ImHtmlFive2 key="html" className="project-icon" />,
      <RiCss3Fill key="css" className="project-icon" />,
      <IoLogoJavascript key="javascript" className="project-icon" />,
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="container">
      <h5>Projects I Have Worked On</h5>
      <h2>My Portfolio</h2>
      <div className="projects-container">
        {data.map(({ id, Image, title, github, demo, icons }) => {
          return (
            <article key={id} class="article-wrapper">
              <img src={Image} alt={title} />
              <div class="project-info">
                <div class="flex-pr">
                  <h6 class="project-title">{title}</h6>
                </div>
                <div className="icons-row">
                  {icons.map((icon, index) => (
                    <React.Fragment key={index}>{icon}</React.Fragment>
                  ))}
                </div>

                <div class="types">
                  <a href={github} class="btn btn-primary" target="blank">
                    GITHUB
                  </a>
                  <a href={demo} class="btn btn-primary" target="blank">
                    LIVE DEMO
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
