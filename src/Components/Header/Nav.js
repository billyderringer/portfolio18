import React, { Component } from 'react'
import './Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends Component{
    render(){
        let skills = "#container-skills"
        let work = "#container-work"
        let connect = "#container-footer"
        return(
            <nav id="container-nav-top">
               <ul className="center-all-flex flex-row caps">
                   <li>
                       <AnchorLink  className="underline"
                                    href={skills}>Skills
                       </AnchorLink>
                   </li>
                   <li>
                       <AnchorLink className="underline"
                                   href={work}>Work
                       </AnchorLink>
                   </li>
                   <li>
                       <AnchorLink className="underline"
                                   href={connect}>Connect
                       </AnchorLink>
                   </li>
               </ul>
            </nav>
        )
    }
}

export default Nav