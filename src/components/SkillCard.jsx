import React from 'react'

const SkillCard = ({ cardInfo }) => {
    return (
        <div className="about-card">
            <div>
                <i className={cardInfo.skillLogo}></i>
            </div>

            <div>
                <h3>

                    {cardInfo.skillName}
                </h3>
            </div>

            <div className="card-text">
                <p className="card-text-heading">
                    {cardInfo.skillDetails}
                </p>

                <div className="card-sub-text">
                    <p>{cardInfo.techHeading}</p>
                    <div >
                        { cardInfo.technologies.map((tech, index) => {
                                return <span key={index}>{tech}</span>
                            }) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard




