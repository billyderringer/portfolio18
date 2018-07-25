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
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </p>
            </section>
        )
    }
}

export default About