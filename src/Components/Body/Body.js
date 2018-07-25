import React, { Component } from 'react'
import './Body.css'
import Splash from "./Splash/Splash"
import About from "./About/About"

class Body extends Component{
    render(){
        return(
            <section id="container-body">
                <Splash />
                <About />

            </section>
        )
    }
}

export default Body