import React, { Component } from "react";
import Piano from "../components/piano/Piano"
import Request from "../helpers/request.js"
import UserLogIn from "../components/login/UserLogIn"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "../components/nav/NavBar"

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
    this.handleUserLogin = this.handleUserLogin.bind(this)
    this.handleNewUser = this.handleNewUser.bind(this)
  }

  componentDidMount(){
    const request = new Request()
    request.get("/api/users")
    .then(data => this.setState({ users: data._embedded.users}))
  }

  handleSelectedUser(user){
    this.setState({ foundUser: user })
  }

  handleUserLogin(name){
    const foundUser = this.state.users.find((user) => {
      return user.username === name
    })
    if (foundUser){
      this.setState({ currentUser: foundUser })
    } else {
      this.setState({ currentUser: null })
    }
  }

  handleNewUser(user){
    this.setState({ currentUser: user })
  }

  render(){
    return (
      <div>
        <Router>
        <NavBar selectedUser={ this.handleSelectedUser } users={ this.state.users }/>
        <Switch>
        <Route exact path="/login" render={ (props) => {
        return <UserLogIn currentUser={ this.state.currentUser } handleUserLogin={ this.handleUserLogin } handleNewUser={ this.handleNewUser }></UserLogIn>
        } }/>
        <Route exact path="/projects" render={ (props) => {
        return null
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
