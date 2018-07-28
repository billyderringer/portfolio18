import React, { Component } from 'react'
import './About.css'

class About extends Component{
    render(){
        return(
            <section id="container-about"
                     className="center-all-flex flex-column">
                <h2 id="about-title"
                    className="section-title">
                    <span id="focus">Focus.</span>
                    <span id="perseverance">Perseverance.</span>
                    <span id="passion">Passion.</span>
                </h2>
                <p>
                    Focused solutions-oriented developer currently working with React, Redux and
                    various other awesome tools. Avid, teachable learner, willing to take on any
                    challenge given the opportunity. Seeking a transition from business owner
                    to full-time Front-End Developer within a growing organization.
                </p>
            </section>
        )
    }
}

export default About