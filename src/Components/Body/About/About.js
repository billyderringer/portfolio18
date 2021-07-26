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
                I am a Front-End Javascript Developer working remotely in Texas. I enjoy solving all types of problems and love what I do! Feel free to check out my side projects and reach out.
              </p>
            </section>
        )
    }
}

export default About