import React, { Component } from "react";
import Piano from "../components/Piano"

class StudioContainer extends Component {
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
