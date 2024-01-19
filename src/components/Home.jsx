import wavingHand from "../static/waving-hand.png";
import html from "../static/skills-logos/html.png";
import css from "../static/skills-logos/css.png";
import nodejs from "../static/skills-logos/nodejs.png";
import mongodb from "../static/skills-logos/mongodb.png";
import redux from "../static/skills-logos/redux.png";
import git from "../static/skills-logos/github.png";
import js from "../static/skills-logos/js.png";
import react from "../static/skills-logos/react.png";
import cpp from "../static/skills-logos/cpp.png";
import { motion as m } from "framer-motion"


const Home = () => {

    return (
        <section id="home" className="hero">
            <div className="container" >
                <m.div className="content"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>Hi, I'm Rajat <br /> Prajapati &nbsp;  <img src={wavingHand} className="waving-hand" alt="waving-hand" /> </h1>

                            <p>Passionate about changing the world with Technology and Innovation.</p>
                            <span><a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rajatprajapati/" className="social_links">
                                <i className="fa-brands fa-linkedin"></i></a>
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/rajat-2121/" className="social_links">
                                    <i className="fa-brands fa-github"></i></a></span>
                        </div>
                        <div className="hero-img"></div>
                    </div>

                    <div className="home-skills">
                        <p>Tech Stack </p>
                        <ul>
                            <li title="CPP"><img src={cpp} alt="cpp" className="skills-logo" /></li>
                            <li title="HTML"><img src={html} alt="html" className="skills-logo" /></li>
                            <li title="CSS"><img src={css} alt="css" className="skills-logo" /> </li>
                            <li title="JavaScript"><img src={js} alt="javascript" className="skills-logo" /> </li>
                            <li title="React"><img src={react} alt="react-js" className="skills-logo" /> </li>
                            <li title="Redux"><img src={redux} alt="redux" className="skills-logo" /> </li>
                            <li title="NodeJS"><img src={nodejs} alt="nodejs" className="skills-logo" /> </li>
                            <li title="MongoDB"><img src={mongodb} alt="mongodb" className="skills-logo" /> </li>
                            <li title="Git"><img src={git} alt="git" className="skills-logo" /> </li>
                        </ul>
                    </div>
                </m.div>

                <a href="#about">
                    <m.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="scroll-down"
                    >
                        Scroll Down
                        <i className="fas fa-arrow-down"></i>
                    </m.div>
                </a>
            </div>
        </section>
    )
}

export default Home;