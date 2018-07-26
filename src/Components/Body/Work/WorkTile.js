import React, { Component } from 'react'
import './Work.css'

class WorkTile extends Component{
    render(){
        return(
            <React.Fragment>
            {
                this.props.projects.map((project, i) => {
                return <div key={i}>
                        <div>
                            <h3 className="sub-title">{project.title}</h3>
                            <p>{project.description}</p>
                            <div>

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                })
            }
            </React.Fragment>
        )
    }
}

export default WorkTile