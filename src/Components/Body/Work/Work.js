import React, { Component } from 'react'
import './Work.css'
import WorkTile from "./WorkTile";
import studentGrads from '../../../Assets/students-graduating.jpg'
import nationalPark from '../../../Assets/national-park.jpg'

class Work extends Component{
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: "Homeschool Hub",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                    "elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                    "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                    "laboris nisi ut aliquip ex ea commodo consequat.",
                    siteUrl: "...",
                    siteGithub: "",
                    imgUrl: studentGrads,
                    bgColor: "blue",
                    bgUrl: "...bg",
                    fgColor: "red",
                    fgCaption: "greenstuff"
                },
                {
                    title: "National Parks Finder",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                    "elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                    "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                    "laboris nisi ut aliquip ex ea commodo consequat.",
                    siteUrl: "",
                    imgUrl: nationalPark,
                    bgColor: "",
                    bgUrl: "",
                    fgColor: "",
                    fgCaption: ""
                }
            ]
        }
    }

    render(){
        return(
            <section id="container-work">
                <h2 className="section-title center">Work</h2>
                <WorkTile projects={this.state.projects}/>
            </section>
        )
    }
}

export default Work