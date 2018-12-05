import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      songData
    }
  }

  topTrack = (trackIndex, side) => {
    let updatedSongData = this.state.songData;
    console.log(trackIndex)
    console.log(side)
    let currentTrack = '';
    let i = '';

    if (side === 'Morning') {
      currentTrack = updatedSongData[0];
      updatedSongData[0] = updatedSongData[trackIndex];
      i = 1;
    } else {
      trackIndex += 43;
      currentTrack = updatedSongData[43];
      updatedSongData[43] = updatedSongData[trackIndex];
      i = 44;
    }

    while (i <= trackIndex) {
      let nextTrack = updatedSongData[i];
      updatedSongData[i] = currentTrack;
      currentTrack = nextTrack;
      i++
    }

    this.setState({songData: updatedSongData});
    console.log(songData);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
            tracks={songData}
            topTrackCallback = {this.topTrack}
          />
        </main>
      </div>
    );
  }
}

export default App;
