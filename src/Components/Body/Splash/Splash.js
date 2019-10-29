import React, { Component } from 'react'
import './Splash.css'

class Splash extends Component{
  render(){
        return(
            <section id="container-splash"
                 className="center-all-flex flex-column caps">
                <div id="background-layer">
                </div>
                <section id="splash-brand"
                     className="center-all-flex flex-row">
                    <h1>
                        <span id="splash-logo">BD</span>
                        <span id="splash-name">Billy Derringer</span>
                    </h1>
                </section>
                <p>Javascript Developer</p>
            </section>
        )
    }
}

export default Splash