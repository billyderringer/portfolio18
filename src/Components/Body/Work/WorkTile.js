import React, { Component } from 'react'
import './Work.css'

class WorkTile extends Component{
    render(){
        const { projects  } = this.props
        return(
          <div id="container-projects"
               className="center-all-flex">
            {
                projects.map((project, i) => {
                return <section key={i}
                            className="project-card shadow shadow-grow">
                            <img className="project-img shadow"
                                 src={project.imgUrl}
                                 alt={project.title}/>
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-buttons">
                                <a className="project-button"
                                   href={project.siteGithub}
                                   target="_blank"
                                   rel="noopener noreferrer" >
                                    <i className="fab fa-github-alt" />
                                    Code
                                </a>
                                <a className="project-button"
                                   href={project.siteUrl}
                                   target="_blank"
                                   rel="noopener noreferrer" >
                                    <i className="fas fa-external-link-alt" />
                                    Demo
                                </a>
                            </div>
                        </section>

                })
            }
          </div>
        )
    }
}

export default WorkTile