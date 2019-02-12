import React, {Component} from 'react'
import './Work.css'

class WorkTile extends Component {
  render() {
    const {projects} = this.props
    return (
      <div id="container-projects">
        {
          projects.map((project, i) => {
            return <section key={i}
                            className="project-card shadow shadow-grow">
              <div className="wrapper-img center-all-flex">
                <img src={project.imgUrl}
                     alt={project.title}
                     className="project-img"/>
              </div>

              <div className="project-body center">
                <div className="project-description">
                  <h3 className="caps">{project.title}</h3>
                  <span className="line">
                                    </span>
                  <p>{project.description}</p>
                </div>
                <div className="project-buttons">
                  <a className="project-button"
                     href={project.siteGithub}
                     target="_blank"
                     rel="noopener noreferrer">
                    <i className="fab fa-github-alt"/>
                    CODE
                  </a>
                  <a className="project-button"
                     href={project.siteUrl}
                     target="_blank"
                     rel="noopener noreferrer">
                    <i className="fas fa-arrow-circle-right"/>
                    DEMO
                  </a>
                </div>
              </div>
            </section>

          })
        }
      </div>
    )
  }
}

export default WorkTile