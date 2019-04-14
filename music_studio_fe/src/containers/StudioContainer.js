import React, { Component } from "react";
import Piano from "../components/piano/Piano"
import Request from "../helpers/request.js"

class StudioContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      currentUser: null,
      projects: [],
      currentProject: null
    }
  }

  componentDidMount(){
    const request = new Request()
    request.get("/api/users")
    .then(data => this.setState({ users: data._embedded.users }))
  }

  render(){
    return (
      <div>
        <h1>I am Studio container!</h1>
        <Piano sound="piano"></Piano>
      </div>
    )
  }
}

export default StudioContainer;
