import React, { Component } from 'react'
import './Work.css'

class WorkTile extends Component{
    render(){
        return(
            <div id="container-projects">
                <h3 className="project-title">Apps</h3>
            {
                this.props.projects.map((project, i) => {
                return <section key={i}
                            className="project-card center-all-flex">
                        <div id="column-left">
                            <a href={project.siteUrl}
                               target="_blank"
                               rel="noopener noreferrer">
                                <h3 className="sub-title">{project.title}</h3>
                            </a>
                            <p>{project.description}</p>
                            <div id="button-row">
                                <a className="project-button"
                                   href={project.siteGithub}
                                   target="_blank"
                                   rel="noopener noreferrer" >
                                    <i className="fab fa-github-alt" />
                                    View the Code
                                </a>
                                <a className="project-button"
                                   href={project.siteUrl}
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt" />
                                    View the Project
                                </a>
                            </div>
                        </div>
                        <div id="column-right">
                            <section className="project-img center-all-flex flex-column">
                                <div className="project-img-bg">
                                </div>
                                <img src={project.imgUrl}
                                     alt={project.title}/>
                            </section>
                        </div>
                    </section>

                })
            }
            </div>
        )
    }
}

export default WorkTile