import React, { Component } from 'react'

class Mockups extends Component{
    render(){
        return(
            <section className="mockups">
                <h3>Mockups</h3>
                <p>These projects were taken from PSD to code. All designs are available via the link
                at the bottom of each page.</p>
                <section className="center-all-flex
                                    flex-row
                                    mockup-items">
                    {
                        this.props.psd.map((project,i) => {
                            return <a href={project.projectUrl}
                                      key={i}
                                      target="_blank"
                                      rel="noopener noreferrer">
                                <div className="mockup-item flex-column">
                                    <h4>{project.title}</h4>
                                    <img className="mockup-img"
                                         src={project.imgUrl}
                                         alt={project.title}/>
                                </div>
                            </a>
                        })
                    }
                </section>
            </section>
        )
    }
}

export default Mockups