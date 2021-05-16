import React from 'react'
import { FaGithubSquare, FaEye } from "react-icons/fa"
import AOS from 'aos'

export default function Project({title, image, index, description, githubLink, url }) {
    React.useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <article className="project" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500">
            <div className="project-img">
                <picture>
                    <img src={image} className="project-img" alt={title} style={{opacity: '1'}}/>
                </picture>
            </div>
            <div className="project-info">
                <span className="project-number">{index + 1}.</span><h3 style={{textAlign: 'center'}}>{title}</h3>
                <p className="project-desc">{description}</p>
                <div className="project-links" style={{textAlign: 'center'}}>
                <a href={githubLink} target='_blank' rel="noreferrer">
                    <FaGithubSquare className="project-icon" />
                </a>
                <a href={url} target='_blank' rel="noreferrer">
                    <FaEye className="project-icon" />
                </a>
                </div>
            </div>
        </article>
    )
}
