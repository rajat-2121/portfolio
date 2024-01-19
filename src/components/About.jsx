
import SkillCard from "./SkillCard"
import skillsInfoList from "./skillsInfoList"
import aboutme from '../static/aboutme.png'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-heading">
                        <h3>About Me</h3>

                        <div className="about-container">

                            <div>
                                <p className="about-text">
                                    I'm a Software Engineer looking for opportunities in the software field. Interned at Blubirch as SDE. Versatile and dedicated, I specialize in full-stack development, adept in C++ and JavaScript. I have worked on technologies like Node.js, React.js, Express, MongoDB. Passionate about problem-solving and continuous learning, I bring creativity to tech projects. With a commitment to excellence and effective communication, I thrive in collaborative, dynamic environments.
                                </p>
                            </div>

                            <div >
                                <img src={aboutme} alt="" />
                            </div>
                        </div>

                        <div className="resume-btn"><a className="button" href="https://drive.google.com/file/d/1aE-6TSuIk-Fi3aY2X11wO7_Yruc4bgFt/view" target="_blank" rel="noreferrer">
                            Resume <span><i className="fa-solid fa-paper-plane"></i></span>
                        </a></div>
                    </div>

                    <div className="about-cards">
                        {
                            skillsInfoList.map((skillsInfo, index) => {
                                return <SkillCard key={index} cardInfo={skillsInfo} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;