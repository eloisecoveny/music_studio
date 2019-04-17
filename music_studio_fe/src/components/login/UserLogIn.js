import React from "react";
import Request from "../../helpers/request"
import { Link } from "react-router-dom"

class UserLogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }
    this.handleUserLogin = this.handleUserLogin.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleNewUser = this.handleNewUser.bind(this)
  }

  handleInput(event){
    this.setState({ name: event.target.value })
  }

  handleUserLogin(){
    this.props.handleUserLogin(this.state.name)
  }

  handleNewUser(){
    const newUser = {
      username: this.state.name
    }
    const request = new Request()
    request.post("/api/users", newUser)
    .then(() => {
      request.get("/api/users/username/" + this.state.name )
      .then((data) => {
        this.props.handleNewUser(data[0])
      })
    })
  }

  render(){
    let loginMessage;
    if (this.props.currentUser){
      loginMessage = <div>
          <h1>WE:LCOME US@£ER</h1>
          <button>Hello</button>
      </div>
    } else {
      loginMessage = null
    }

    return(
      <div className="user-login">
        <input onChange={ this.handleInput } type="text" placeholder="Enter Username..."/>
        <button onClick={ this.handleUserLogin }><Link to="/projects">Log in</Link></button>
        <button onClick={ this.handleNewUser }><Link to="/projects">Sign Up</Link></button>
        { loginMessage }
      </div>
    )
  }
}

export default UserLogIn;
