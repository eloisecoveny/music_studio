import React, {Component } from "react";

export default class Login extends Component{
    constructor(props){
        this.state={
            isLoading: false,
            password: ""

        }
    }

    handleSubmit = async event => {
        event.preventDefault();
      
        this.setState({ isLoading: true });
      
        try {
          await Auth.signIn(this.state.password);
          this.props.userHasAuthenticated(true);
          this.props.history.push("/");
        } catch (e) {
          alert(e.message);
          this.setState({ isLoading: false });
        }
      }
      
}