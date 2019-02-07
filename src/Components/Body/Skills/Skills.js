import React, { Component } from 'react'
import './Skills.css'
import SkillColumn from "./SkillColumn"
import sign from '../../../Assets/neon-arrow.jpg'

class Skills extends Component{
    constructor(props) {
        super(props);
        this.state = {
            programming: [
                "Javascript",
                "Jest",
                "ReactJS",
                "Redux",
                "NodeJS",
                "MongoDB",
                "jQuery",
                "AJAX",
                "HTML",
                "CSS/SASS",
                "Materialize CSS",
                "Bootstrap 3/4"
            ],
            versioning: [
                "Git",
                "Github",
                "Bitbucket"
            ],
            other: [
                "NPM",
                "Webpack",
                "Heroku",
                "Adobe Suite (Design)",
                "Gimp",
                "CorelDraw"
            ]

        }
    }

    render(){
        return(
            <section id="container-skills"
                     className="center-all-flex flex-column">
                <h3 id="skills-title-secondary"
                    className="caps">These are some of my</h3>
                <h2 id="skills-title"
                    className="section-title caps">
                    Skills
                </h2>
                <section id="container-columns"
                         className="center-all-flex flex-row">
                    <SkillColumn header="Programming"
                                 icon="fas fa-code"
                                 skills={this.state.programming}
                                 id="programming-skills" />
                    <section className="flex-column">
                        <SkillColumn header="Versioning"
                                     icon="fas fa-code-branch"
                                     skills={this.state.versioning}
                                     id="versioning-skills" />
                        <SkillColumn header="Other"
                                     icon="fas fa-terminal"
                                     skills={this.state.other}
                                     id="other-skills" />
                    </section>
                    <section id="skills-img">
                        <div id="skills-img-bg">
                        </div>
                        <img src={sign}
                             alt="neon arrow"/>
                    </section>
                </section>

            </section>
        )
    }
}

export default Skills