import React from "react";
import SequencePlayer

const ProjectInfo = (props) => {


  const sequences = this.props.currentProject.sequences.map((sequence, index) => {
    return <li value={sequence} key={index}>{sequence.name} : <SequencePlayer audio={sequence.data}></SequencePlayer></li>
  })


  return(
    <ul>
      <h4>ProjectInfo</h4>
      {sequences}
    </ul>
  )
}

export default ProjectInfo;
