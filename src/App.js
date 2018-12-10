import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  // song.favorite = false;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      tracks: songData
    };
  }

  handleChange(i) {
    this.setState({
      favorite: !this.state.favorite,
    })
  }

  moveTrackUp(i) {
    const newTracks = this.state.tracks.slice();
    const index = newTracks.findIndex(track => track.id === i)

    newTracks.unshift(newTracks[index].splice(index,1)[0])

    this.setState({
        tracks: newTracks
      });
  };


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
            tracks={this.state.tracks}
            favorite={this.state.favorite}
            onChange={(i) => this.handleChange(i)}
            moveTrackUpCallback={this.moveTrackUp}
            />
        </main>
      </div>
    );
  }
}

export default App;
