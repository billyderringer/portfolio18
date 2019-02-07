import React, { Component } from 'react'
import './Body.css'
import Splash from "./Splash/Splash"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Work from "./Work"

class Body extends Component{
    render(){
        return(
            <section id="container-body">
                <Splash />
                <About />
                <Skills />
                <Work />
            </section>
        )
    }
}

export default Body