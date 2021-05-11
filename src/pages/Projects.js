import React from 'react';
import projects from "../data/projects"
import Project from "../elements/Project"

function Projects() {
  return (
      <main>
        <section className="projects-page">
          <section className="section projects">
            <div className="section-title">
              <h2>Projects</h2>
              <div className="underline"></div>
            </div>
            <div className="section-center projects-center">
              {projects.map((project, index) => {
                return <Project key={project.id} index={index} {...project} />
              })}
            </div>
          </section>
        </section>
      </main>
  )
}

export default Projects;