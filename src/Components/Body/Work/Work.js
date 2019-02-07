import React, { Component } from 'react'
import './Work.css'
import WorkTile from "./WorkTile"
import jewelryBg from '../../../Assets/jewelry-bg.jpg'
import chargerBg from '../../../Assets/charger-bg.jpg'
//capBg used for Homeschool Hub
//import capBg from '../../../Assets/cap-bg.jpg'
import nationalPark from '../../../Assets/national-park.jpg'
import partyPlanet from '../../../Assets/party-balloons.jpg'
import dictionary from '../../../Assets/dictionary.jpg'
import addition from '../../../Assets/addition.jpeg'

class Work extends Component{
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                /*
                {
                    title: "Homeschool Hub",
                    description: "A React/Redux app that performs as a content management system for Homeschooling families/individuals." +
                    " Custom backend API features authentication using JWT Bearer Tokens and full CRUD operations." +
                    " This project is a work in progress.",
                    siteUrl: "https://billyderringer.github.io/homeschool-hub/",
                    siteGithub: "https://github.com/billyderringer/homeschool-hub",
                    imgUrl: studentGrads
                },
                */
                {
                    title: "NEXT.",
                    description: "A responsive mock-up for an e-commerce jewelry store",
                    siteUrl: "https://billyderringer.github.io/jewelry-store/",
                    siteGithub: "https://github.com/billyderringer/jewelry-store",
                    imgUrl: jewelryBg
                },
                {
                    title: "Charger Customs",
                    description: "A responsive mock-up for a custom auto garage",
                    siteUrl: "https://billyderringer.github.io/charger/",
                    siteGithub: "https://github.com/billyderringer/charger",
                    imgUrl: chargerBg
                },
                /*
                {
                    title: "CAP Program",
                    description: "",
                    imgUrl: capBg,
                    siteUrl: "https://billyderringer.github.io/cap-program/"
                },
                */
                {
                    title: "National Parks Finder",
                    description: "A React app that returns results by state using the National Parks Service API",
                    siteUrl: "https://billyderringer.github.io/National-Park-Finder/",
                    siteGithub: "https://github.com/billyderringer/National-Park-Finder",
                    imgUrl: nationalPark
                },
                {
                    title: "Party Planet",
                    description: "A React/Redux app that allows the user to build an order of party supplies",
                    siteUrl: "https://billyderringer.github.io/party-planet/",
                    siteGithub: "https://github.com/billyderringer/party-planet",
                    imgUrl: partyPlanet
                },
                {
                    title: "Random Speller",
                    description: "A React app that generates random words with definitions to practice spelling",
                    siteUrl: "https://billyderringer.github.io/random-speller/",
                    siteGithub: "https://github.com/billyderringer/random-speller",
                    imgUrl: dictionary
                },
                {
                    title: "Project Math",
                    description: "An app that generates random math problems with varying difficulty levels" ,
                    siteUrl: "https://billyderringer.github.io/project-math/",
                    siteGithub: "https://github.com/billyderringer/project-math",
                    imgUrl: addition
                }
            ]
        }
    }

    render(){
        return(
            <section id="container-work">
                <h2 className="section-title center caps">Work</h2>
                <WorkTile projects={this.state.projects}/>
            </section>
        )
    }
}

export default Work