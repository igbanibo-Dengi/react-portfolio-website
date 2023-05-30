import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.png";

const data = [
  {
    id: 1,
    Image: IMG6,
    title: "MCU",
    github: "https://github.com/igbanibo-Dengi/mcu-database",
    demo: "https://marvelcinematicuniversedatabase.netlify.app/",
  },
  {
    id: 2,
    Image: IMG1,
    title: "Nexus Gaming",
    github: "https://github.com/igbanibo-Dengi/nexus-gaming",
    demo: "https://nexusgaming.netlify.app/",
  },
  {
    id: 3,
    Image: IMG2,
    title: "ShortLinked",
    github: "https://github.com/igbanibo-Dengi/Shortly",
    demo: "https://shortlinked.netlify.app/",
  },
  {
    id: 4,
    Image: IMG3,
    title: "Home Lander BnB",
    github: "https://github.com/igbanibo-Dengi/Home-lander-BNB",
    demo: "https://homelanderbnb.netlify.app/",
  },
  {
    id: 5,
    Image: IMG4,
    title: "Manage landing Page",
    github: "https://github.com/igbanibo-Dengi/manager",
    demo: "https://managetwc.netlify.app/",
  },
  {
    id: 6,
    Image: IMG5,
    title: "Counter App",
    github: "https://github.com/igbanibo-Dengi/counter-web-app",
    demo: "https://count-el.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="container">
      <h5>Projects I Have Worked On</h5>
      <h2>My Portfolio</h2>
      <div className="projects-container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} class="article-wrapper">
              <img src={Image} alt={title} />
              <div class="project-info">
                <div class="flex-pr">
                  <h6 class="project-title">{title}</h6>
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
