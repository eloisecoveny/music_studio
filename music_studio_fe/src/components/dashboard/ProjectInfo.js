import React from "react";
import SequencePlayer from "./SequencePlayer";

const ProjectInfo = (props) => {

  const sequences = [];
  if(props.currentProject){
    props.currentProject.sequences.map((sequence, index) => {
      sequences.push(<li value={sequence} key={index}>{sequence.name} : <SequencePlayer audio={sequence.data}></SequencePlayer></li>)
    })
  }


  return(
    <ul>
      <h4>ProjectInfo</h4>
      {sequences}
    </ul>
  )
}

export default ProjectInfo;
