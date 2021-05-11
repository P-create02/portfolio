import React from 'react'
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

export default function Project({title, image, index, description, githubLink, url }) {
    return (
        <article className="project">
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
                    <FaShareSquare className="project-icon" />
                </a>
                </div>
            </div>
        </article>
    )
}
