import React, { Component } from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";


import "./App.css";

class App extends Component {
  render() {
      return (
        <div className="App container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Scratch</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes />
        </div>
      );
    }
  };    
   

export default App;





















// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       isAuthenticated: false
//     };
//   }
  
//   userHasAuthenticated = authenticated => {
//     this.setState({ isAuthenticated: authenticated });
//   }
  
//   render() {
//     const childProps = {
//       isAuthenticated: this.state.isAuthenticated,
//       userHasAuthenticated: this.userHasAuthenticated
//     };
    
//   }
// }

// export default App;
