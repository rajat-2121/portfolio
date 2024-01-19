import ProjectCard from "./ProjectCard";
import projectList from "./projectList";

const Projects = () => {

    return <section id="projects" className="projects">
        <div className="container">
            <div className="projects-content">
                <div className="about-heading">
                    <h3>Projects</h3>
                    {/* <p>Have a look on my projects 🖱️</p> */}
                </div>

                <div className="projects-grid">
                    {
                        projectList.map((projectData, index) => {
                            return <ProjectCard key={index} data={projectData} />
                        })
                    }
                </div>
            </div>
        </div>
    </section>
}

export default Projects;