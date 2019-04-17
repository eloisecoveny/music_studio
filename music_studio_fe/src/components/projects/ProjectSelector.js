import React from "react";
import Request from "../../helpers/request.js";

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
      user: this.props.currentUser
    }
    const request = new Request();
    request.post("/api/projects", project)
    this.props.handleProjectSelection(project)
    this.setState({ newProjectName: "" })
  }

  render(){

    const projects = this.props.currentUser.projects.map((project, index) => {
      return <li className="projectLink" onClick={ () => this.handleSelection(project) }>{ project.name }</li>
    })

    return(
      <div>
        <h1>Project Selector</h1>
        <ul>
          {projects}
        </ul>
        <input type="text" placeholder="Create a new project" value={this.state.newProjectName} onChange={this.handleProjectInput}></input>
        <button onClick={this.handleSubmit}>Create Project</button>
      </div>
    )
  }

}

export default ProjectSelector;
