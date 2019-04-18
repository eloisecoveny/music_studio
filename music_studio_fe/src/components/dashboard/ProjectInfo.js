import React from "react";
import SequencePlayer from "./SequencePlayer";

const ProjectInfo = (props) => {

  let sequencePlayer;
  if(props.currentProject){
    sequencePlayer = <SequencePlayer sequences={ props.currentProject.sequences }/>
  }


  return(
    <div>
      <h4>ProjectInfo</h4>
      {sequencePlayer}
    </div>
  )
}

export default ProjectInfo;
