import React from "react";

const SequencePlayer = (props) => {


  const playAudio = (audio) => {
    const url = audio
    fetch(url)
    .then(res => res.blob())
    .then(blob => URL.createObjectURL(blob))
    .then((data) => {
      const audio = new Audio()
      audio.src = data
      audio.play()
    })
  }

  const sequences = props.sequences.map((seq, index) => {
    return <div key={index}>
      <p onClick={ () => playAudio( seq.audio) }>{ seq.name }</p>
    </div>
  })

  return (
    <div>
      {sequences}
    </div>

  )
}

export default SequencePlayer;
