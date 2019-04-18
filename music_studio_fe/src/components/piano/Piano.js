import React from "react";
import PianoKey from "./PianoKey"
import Tone from "tone"
import Request from "../../helpers/request"
import RecordingTools from "../recording/RecordingTools"
import "./Piano.css"


class Piano extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      audioData: "",
      recording: false,
      audio: null,
      synth: null,
      context: null,
      destination: null,
      recorder: null
    }
    this.handlePlayNote = this.handlePlayNote.bind(this)
    this.playNote = this.playNote.bind(this)
    this.startRecord = this.startRecord.bind(this)
    this.stopRecord = this.stopRecord.bind(this)
    this.saveAudio = this.saveAudio.bind(this)
    this.generateContext = this.generateContext.bind(this)
    this.clickHandlePlayNote = this.clickHandlePlayNote.bind(this)
  }

  componentDidMount(){
    let heldKeys = []
    window.addEventListener('keydown', (e) => {
      if (!heldKeys.includes(e.key)){
        heldKeys.push(e.key)
        this.playNote(e)
      } else {
        return null
      }
    });
    this.generateContext()
    window.addEventListener("keyup", (e) => {
      if (heldKeys.includes(e.key)){
        let index = heldKeys.indexOf(e.key)
        heldKeys.splice(index, 1)
        this.state.synth.triggerRelease()
      }

    })
  }

  clickHandlePlayNote(note){
    this.state.synth.triggerAttackRelease(note, 0.2)
  }

  startRecord(){
    if (!this.state.recording){
      this.state.recorder.start()
      this.setState({ recording: true })
    }
  }

  stopRecord(){
    if (this.state.recording){
      this.state.recorder.stop()
      this.setState({ recording: false })
    }

  }

  generateContext(){
    const audio = document.querySelector("audio")
    const synth = new Tone.Synth({
        "oscillator" : {
          "type" : "sine4",
          "modulationFrequency" : 0.4
        }
    });
    const context = Tone.context;
    const destination = context.createMediaStreamDestination();
    const recorder = new MediaRecorder(destination.stream)
    this.setState({ audio: audio, synth: synth, context: context, destination: destination, recorder: recorder })
  }


  handlePlayNote(note){
    if (this.state.recorder){
      this.state.synth.connect(this.state.destination)
      this.state.synth.toMaster();

      const chunks = [];

      this.state.synth.triggerAttack(note)




      window.addEventListener("mouseup", () => {
        this.state.synth.triggerRelease()
      })

      const recorder = this.state.recorder

      recorder.ondataavailable = evt => chunks.push(evt.data);
      recorder.onstop = evt => {
        let audio = this.state.audio
        let blob = new Blob(chunks, {type: 'audio/ogg; codecs=opus'})
        let audioUrl = URL.createObjectURL(blob);
        let base64data = ""
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          base64data = reader.result;
          this.setState({ audioData: base64data })
        }
        audio.src = audioUrl

      }
    }
  }

  saveAudio(name){
    const request = new Request()
    const payload = {
      name: name,
      project: "http://localhost:8080/api/projects/" + this.props.currentProject.id,
      user: "http://localhost:8080/api/users/" + this.props.currentUser.id,
      audio: this.state.audioData
    }
    request.post("/api/sequences", payload)
  }



  playNote(e){
    const key = document.querySelector(`div[data-key="${e.key}"]`)
    if (key){
      this.handlePlayNote(key.getAttribute("note"));
    }
  }


  render(){



    const notes = [{note: "A4", input: "a", class: "A"}, {note: "A#4", input: "1", class: "B"}, {note: "B4", input: "s", class: "C"}, {note: "C4", input: "q", class: "D"}, {note: "C#4", input: "2", class: "E"}, {note: "D4", input: "w", class: "F"}, {note: "D#4", input: "3", class: "G"}, {note: "E4", input: "e", class: "H"}, {note: "F4", input: "r", class: "I"}, {note: "F#4", input: "4", class: "J"}, {note: "G4", input: "t", class: "K"}, {note: "G#4", input: "5", class: "L"}, {note: "A4", input: "y", class: "M"}, {note: "A#4", input: "6", class: "N"}, {note: "B4", input: "u", class: "O"}, {note: "C5", input: "i", class: "P"}, {note: "C#5", input: "7", class: "Q"}, {note: "D5", input: "o", class: "R"}, {note: "D#5", input: "8", class: "S"}, {note: "E5", input: "p", class: "T"}, {note: "F#5", input: "9", class: "U"}, {note: "F5", input: "k", class: "V"}, {note: "G#5", input: "0", class: "W"}, {note: "G5", input: "l", class: "X"}]

    const keys = notes.map((note, index) => {
      return <PianoKey handleClickPlayNote={ this.clickHandlePlayNote } note={ note.note } class={ note.class } input={ note.input } key={ index }></PianoKey>
    })

    return (
      <div className="piano">
        <h1>I am piano!</h1>
        <RecordingTools startRecord={ this.startRecord } stopRecord={ this.stopRecord } saveAudio={ this.saveAudio }></RecordingTools>
        <div className= "KeyContainer">{ keys } </div>
        <audio id="main-audio"></audio>
      </div>
    )

  }



}

export default Piano
