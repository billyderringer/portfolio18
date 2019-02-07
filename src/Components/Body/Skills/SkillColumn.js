import React, { Component } from 'react'
import './Skills.css'

class SkillColumn extends Component{

    render(){
        return(
            <React.Fragment>
                <ul id={this.props.id}>
                    <h3 className="sub-title caps">
                        <i className={this.props.icon} />
                        {this.props.header}
                    </h3>
                {
                    this.props.skills.map((skill, i) => {
                        return <li key={i}
                                   className="skill-item">
                                    <i className="fas fa-crosshairs" />
                                    {skill}
                                </li>
                    })
                }
                </ul>
            </React.Fragment>
        )
    }
}

export default SkillColumn