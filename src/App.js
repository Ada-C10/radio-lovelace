import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
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
          trackArray.unshift(removedTrack[0])
          this.setState({allSongs: trackArray}, () => {
            console.log(this.state.allSongs)
          });
        }
      }
    } else {
      // for (let song of this.state.allSongs) {
      //   if (song.id === track.props.id) {
      //     let trackArray = [...this.state.allSongs]
      //     let removedTrack = [...this.state.allSongs].splice(song.id + 42, 1)
      //     let firstHalf = [...this.state.allSongs].slice(0, 42)
      //     let secondHalf = [...this.state.allSongs].slice(43, this.state.allSongs.length)
      //     secondHalf.unshift(removedTrack[0])
      //     console.log("second half:")
      //     console.log(secondHalf)
      //     let trackArray = firstHalf.concat(secondHalf)
      //     // console.log(trackArray)
      //     this.setState({allSongs: trackArray}, () => {
      //       console.log(this.state.allSongs)
      //     });
      //   }
      // }

    }
  }

  render() {

    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
          tracks={this.state.allSongs}
           />
        </main>
      </div>
    );
  }
}

export default App;
