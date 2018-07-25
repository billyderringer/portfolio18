import React, { Component } from 'react'
import './Header.css'
import Brand from "./Brand"
import Nav from "./Nav"

class Header extends Component{
    render(){
        return(
            <div id="container-header"
                 className="center-all-flex flex-row">
                <Brand />
                <Nav />
            </div>
        )
    }
}

export default Header