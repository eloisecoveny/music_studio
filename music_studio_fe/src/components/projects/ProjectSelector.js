import React from "react";
import Request from "../../helpers/request.js";
import { Link } from "react-router-dom";

class ProjectSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newProjectName: ""
    }
    this.handleProjectInput = this.handleProjectInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleProjectInput(e){
    this.setState({ newProjectName: e.target.value })
  }

  handleSubmit(e){
    const project = {
      name: this.state.newProjectName,
      user: this.props.currentUser._links.self.href
    }
    const request = new Request();
    request.post("/api/projects", project)
    this.props.handleProjectSelection(project)
    this.setState({ newProjectName: "" })
  }

  render(){

    const projects = this.props.currentUser.projects.map((project, index) => {
      return <li className="projectLink" key={index} onClick={ () => this.props.handleProjectSelection(project) }><Link to="/studio">{ project.name }</Link></li>
    })

    return(
      <div>
        <h1>Welcome { this.props.currentUser.username }!</h1>
        <h4>Pick an existing project or create a new one</h4>
        <ul>
          {projects}
        </ul>
        <input type="text" placeholder="Create a new project" value={this.state.newProjectName} onChange={this.handleProjectInput}></input>
        <button onClick={this.handleSubmit}><Link to="/studio">Create Project</Link></button>
      </div>
    )
  }

}

export default ProjectSelector;
