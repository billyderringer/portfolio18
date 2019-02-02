import React, { Component } from 'react'
import './About.css'

class About extends Component{
    render(){
        return(
            <section id="container-about"
                     className="center-all-flex flex-column">
                <h2 id="about-title"
                    className="section-title">
                    <span id="focus">WELCOME!</span>
                </h2>
                <p>
                    In short, I am a developer whose goal is to find the
                  best solution for any given problem. Because of this, I am constantly learning new technologies and methods
                  for improving my workflow.<br className="no-show-tab"/> Check out some of my work below.
                </p>
            </section>
        )
    }
}

export default About