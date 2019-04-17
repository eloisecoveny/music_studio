import React, { Component } from "react";
import Piano from "../components/piano/Piano"
import Request from "../helpers/request.js"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "../components/nav/NavBar"
import ProjectSelector from "../components/projects/ProjectSelector"

class StudioContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      currentUser: null,
      projects: [],
      currentProject: null,
      foundUser: null
    }
    this.handleSelectedUser = this.handleSelectedUser.bind(this)
    this.handleProjectSelection = this.handleProjectSelection.bind(this)
  }

  componentDidMount(){
    const request = new Request()
    request.get("/api/users")
    .then(data => this.setState({ users: data._embedded.users }))
  }

  handleSelectedUser(user){
    this.setState({ foundUser: user })
  }

  handleProjectSelection(project){
    this.setState({ currentProject: project })
  }

  render(){
    return (
      <div>
        <Router>
        <NavBar selectedUser={ this.handleSelectedUser } users={ this.state.users }/>
        <Switch>
        <Route exact path="/home" render={ (props) => {
        return null
        } }/>
        <Route exact path="/projects" render={ (props) => {
        return <ProjectSelector currentUser={this.state.currentUser} handleProjectSelection={this.handleProjectSelection}/>
        } }/>
        <Route exact path="/studio" render={ (props) => {
        return <Piano sound="piano"></Piano>
        } }/>
        </Switch>
        </Router>

      </div>
    )
  }
}

export default StudioContainer;
