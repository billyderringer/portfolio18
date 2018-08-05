import React, { Component } from 'react'
import './Work.css'
import WorkTile from "./WorkTile"
import jewelryBg from '../../../Assets/jewelry-bg.jpg'
import chargerBg from '../../../Assets/charger-bg.jpg'
import studentGrads from '../../../Assets/students-graduating.jpg'
import nationalPark from '../../../Assets/national-park.jpg'
import partyPlanet from '../../../Assets/party-balloons.jpg'
import dictionary from '../../../Assets/dictionary.jpg'
import addition from '../../../Assets/addition.jpeg'
import Mockups from "./Mockups"

class Work extends Component{
    constructor(props) {
        super(props);
        this.state = {
            psd:[
                {
                    title: "Jewelry Store",
                    imgUrl: jewelryBg
                },
                {
                    title: "Charger",
                    imgUrl: chargerBg
                }
            ],
            projects: [
                {
                    title: "Homeschool Hub",
                    description: "A React/Redux app that performs as a content management system for Homeschooling families/individuals." +
                    " Custom backend API features authentication using JWT Bearer Tokens and full CRUD operations." +
                    " This project is a work in progress.",
                    siteUrl: "https://billyderringer.github.io/homeschool-hub/",
                    siteGithub: "https://github.com/billyderringer/homeschool-hub",
                    imgUrl: studentGrads
                },
                {
                    title: "National Parks Finder",
                    description: "A React app that returns results by state using the National Parks Service API. " +
                    "Find your next adventure here!",
                    siteUrl: "https://billyderringer.github.io/National-Park-Finder/",
                    siteGithub: "https://github.com/billyderringer/National-Park-Finder",
                    imgUrl: nationalPark
                },
                {
                    title: "Party Planet",
                    description: "A React/Redux app that allows the user to build an order of party supplies. Inventory levels/costs" +
                    " are maintained throughout the order process and user can return items upon viewing/closing completed orders.",
                    siteUrl: "https://billyderringer.github.io/party-planet/",
                    siteGithub: "https://github.com/billyderringer/party-planet",
                    imgUrl: partyPlanet
                },
                {
                    title: "Random Speller",
                    description: "A React app that connects to the WordsAPI and generates random words with definitions " +
                    "to practice spelling. Voice is provided by the ResponsiveVoice API",
                    siteUrl: "https://billyderringer.github.io/random-speller/",
                    siteGithub: "https://github.com/billyderringer/random-speller",
                    imgUrl: dictionary
                },
                {
                    title: "Project Math",
                    description: "An app that generates random math problems based upon selections of operation and difficulty" +
                    " level. This project makes use of template literals and conditional rendering to behave as a SPA. No" +
                    " framework was used for Project Math.",
                    siteUrl: "https://billyderringer.github.io/project-math/",
                    siteGithub: "https://github.com/billyderringer/project-mathr",
                    imgUrl: addition
                }
            ]
        }
    }

    render(){
        return(
            <section id="container-work">
                <h2 className="section-title center">Work</h2>
                <Mockups psd={this.state.psd}/>
                <WorkTile projects={this.state.projects}/>
            </section>
        )
    }
}

export default Work