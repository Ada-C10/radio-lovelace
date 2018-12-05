import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
});

class App extends Component {

  constructor() {
    super();

    this.state = {
      allSongs: songData
    };
  }

  sortTracks = (track) => {
    if (track.props.side === "Morning") {
      for (let song of this.state.allSongs) {
        if (song.id === track.props.id) {
          let trackArray = [...this.state.allSongs]
          let removedTrack = trackArray.splice(song.id, 1)
          console.log(removedTrack)
          trackArray.unshift(removedTrack[0])
          console.log(trackArray)
          this.setState({allSongs: trackArray}, () => {
            console.log(this.state.allSongs)
          });
          console.log(this.state.allSongs)
        }
      }
    } else if (track.props.side === "Evening") {

    }
  }

  render() {
    songData.forEach((song, i) => {
      song.id = i;
    });

    console.log(this.state.allSongs)
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
          tracks={this.state.allSongs}
          sortTracksCallback = {this.sortTracks}
           />
        </main>
      </div>
    );
  }
}

export default App;
