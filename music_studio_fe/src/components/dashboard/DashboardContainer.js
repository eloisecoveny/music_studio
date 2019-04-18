import React from "react";
import UserInfo from "./UserInfo";
import ProjectInfo from "./ProjectInfo";
import SequenceInfo from "./SequenceInfo";


class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSequence: null
    }
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(sequence){
    this.setState({ selectedSequence: sequence })
  }

  render(){

    return(
      <div>
        <h1>Dashboard Container</h1>
        <UserInfo currentUser={this.props.currentUser}/>
        <ProjectInfo currentProject={this.props.currentProject} handleSelection={this.handleSelection}/>
        <SequenceInfo selectedSequence={this.state.selectedSequence}/>
      </div>
    )
  }
}

export default DashboardContainer;
