import React, { Component } from 'react'
import './Work.css'
import WorkTile from "./WorkTile";

class Work extends Component{
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: "Homeschool Hub",
                    description: "This is homeschool hub",
                    siteUrl: "...",
                    imgUrl: "urlimg",
                    bgColor: "blue",
                    bgUrl: "...bg",
                    fgColor: "red",
                    fgCaption: "greenstuff"
                },
                {
                    title: "National Parks Finder",
                    description: "This is nps",
                    siteUrl: "",
                    imgUrl: "",
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