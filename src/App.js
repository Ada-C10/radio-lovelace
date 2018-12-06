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
      Morning: songData.slice(0, songData.length / 2),
      Evening: songData.slice(songData.length/2, songData.length)
    }
  }

  topTrack = (trackIndex, side) => {
    let updatedSongList = this.state[side];
    console.log(this.state)
    console.log(side)

    let currentTrack = updatedSongList[0];
    updatedSongList[0] = updatedSongList[trackIndex];
    let i = 1;

    while (i <= trackIndex) {
      let nextTrack = updatedSongList[i];
      updatedSongList[i] = currentTrack;
      currentTrack = nextTrack;
      i++
    }

    if (side === 'Morning') {
      this.setState({Morning: updatedSongList})
    } else {
      this.setState({Evening: updatedSongList})
    }

    console.log(this.state);
  }

  switchPlaylist = (trackIndex, side) => {
    console.log(side);
    console.log(trackIndex);

    let updatedSongData = this.state;
    const track = updatedSongData[side][trackIndex];

    console.log(track);

    if (side === 'Morning') {
      updatedSongData.Evening.unshift(track)
    } else {
      updatedSongData.Morning.unshift(track)
    }

    updatedSongData[side].splice(trackIndex, 1);

    this.setState({updatedSongData})

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
            tracks={this.state}
            topTrackCallback = {this.topTrack}
            switchPlaylistCallback = {this.switchPlaylist}
          />
        </main>
      </div>
    );
  }
}

export default App;
