import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';
import Freebird from './Freebird.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleAClick = this.handleAClick.bind(this)
    this.handleBClick = this.handleBClick.bind(this)
    this.handleCClick = this.handleCClick.bind(this)
  }

  handleAClick(playTime) {
    const audio = document.getElementById('audio')
    audio.currentTime = 245;
    audio.play();
  }

  handleBClick(playTime) {
    const audio = document.getElementById('audio')
    audio.currentTime = 283;
    audio.play();
  }

  handleCClick(playTime) {
    const audio = document.getElementById('audio')
    audio.currentTime = 325;
    audio.play();
  }


  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-center">
          <div className="card">
            <h3>Freebird Solo Queue</h3>
            <h5>When you need the Freebird solo<br/> queued up in a pinch!</h5>
            <audio controls id="audio"
              src={Freebird}
              type="audio/mpeg"
            /><br />
            <button className="btn btn-success" onClick={this.handleAClick}>Just Getting Started</button>
            <button className="btn btn-primary" onClick={this.handleBClick}>Party</button>
            <button className="btn btn-danger" onClick={this.handleCClick}>Police are on the way</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
