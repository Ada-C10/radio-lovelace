import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {

  song.id = i;
  song.favorite = false;
  if (song.id < songData.length/2) {
    song.playlist = "Morning"
  }
  else {
    song.playlist = "Evening"
  }
});

class App extends Component {
  constructor() {
    super()
    console.log(this.state)
    this.state = {
      songData,
    }
    console.log(songData);
  }

  render() {
  return (
    <div className="App">
      <header>
        <h1 className="page-header--title">Radio Lovelace</h1>
      </header>
      <main className="main">
        <RadioSet tracks={this.state.songData} />
      </main>
    </div>
  );
}
}

export default App;
