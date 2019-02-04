import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './About.css'

class About extends Component{
    render(){
      let skills = "#container-skills"
        return(
            <section id="container-about"
                     className="center-all-flex flex-column">
              <h2 id="about-title"
                  className="section-title">
                  <span id="focus">WELCOME!</span>
              </h2>
              <p>
                  In short, I am a developer whose goal is to find the
                best solution for any given problem. I am constantly learning new technologies and methods
                for improving my workflow.
              </p>
              <br/>
              <AnchorLink href={skills} id="check-out">
                CHECK ME OUT
              </AnchorLink>
            </section>
        )
    }
}

export default About