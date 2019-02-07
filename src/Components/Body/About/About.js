import React, { Component } from 'react'
import './About.css'

class About extends Component{
    render(){
        return(
            <section id="container-about"
                     className="center-all-flex flex-column">
              <h2 id="about-title"
                  className="section-title">
                  WELCOME!
              </h2>
              <p>
                  My goal is to find the best solution for any given problem.
                I am constantly learning new technologies and methods for improving my workflow.
              </p>
            </section>
        )
    }
}

export default About