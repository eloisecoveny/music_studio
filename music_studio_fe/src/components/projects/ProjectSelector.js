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
    this.handleExistingProject = this.handleExistingProject.bind(this)
  }

  handleProjectInput(e){
    this.setState({ newProjectName: e.target.value })
  }

  handleSubmit(e){
    const project = {
      name: this.state.newProjectName,
      user: "http://localhost:8080/api/users/" + this.props.currentUser.id
    }
    console.log(project);
    const request = new Request();
    request.post("/api/projects", project)
    .then(() => {
      request.get("/api/projects/project/" + project.name)
      .then((data) => {
        this.props.handleProjectSelection(data[0])
      })
    })
    this.setState({ newProjectName: "" })
  }

  handleExistingProject(project){
    const request = new Request();
    request.get("/api/projects/project/" + project.name)
    .then((data) => {
      console.log(data[0]);
      this.props.handleProjectSelection(data[0])
    })
  }

  render(){
    let projects;
    if(this.props.currentUser){
      projects = this.props.currentUser.projects.map((project, index) => {
        return <li className="projectLink" key={index} onClick={ () => this.handleExistingProject(project) }><Link to="/studio">{ project.name }</Link></li>
      })
    } else {
      return null
    }


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
