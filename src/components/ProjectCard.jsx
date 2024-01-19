const ProjectCard = ({data}) => {

    return (
        <div className="pro pro_1">
            <div className="pro-img">
                <a href="#home"> <img src={data.image} alt="project_1_image"></img></a>
            </div>

            <div className="pro-text">
                <h4>{data.name}</h4>
                <p>{data.detail}</p>
                
                <div className="links"><a target="_blank" href={data.github} rel="noreferrer">Code <i className="fa-brands fa-github"></i></a>
                    <a target="_blank" href={data.deployment} rel="noreferrer">Live Demo<i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
                </div>

                <div className="tech">
                    {
                        data.technologies.map((tech, index) => {
                            return <span key={index}>{tech}</span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default ProjectCard;