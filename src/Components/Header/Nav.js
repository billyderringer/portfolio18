import React, { Component } from 'react'
import './Header.css'

class Nav extends Component{
    render(){
        return(
            <nav id="container-nav-top">
               <ul className="center-all-flex flex-row">
                   <li>
                       <a href="https://www.billyderringer.com">Skills</a>
                   </li>
                   <li>
                       <a href="https://www.billyderringer.com">Work</a>
                   </li>
                   <li>
                       <a href="https://www.billyderringer.com">Connect</a>
                   </li>
               </ul>
            </nav>
        )
    }
}

export default Nav