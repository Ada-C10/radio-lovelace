import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songData: songData
    }
  }

  markFavorite = (song_id) => {
    const newSongData = this.state.songData;
    newSongData[song_id].favorite = true;

    this.setState({songData: newSongData});
  }

  sendToTop = (song_id) => {
    let newSongData = this.state.songData;
    newSongData.unshift(newSongData[song_id]);
    newSongData = newSongData.filter(song => song.id !== song_id);

    this.setState({songData: newSongData});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData} markFavoriteCallback={this.markFavorite}
          toTopCallback={this.sendToTop} />
        </main>
      </div>
    );
  }
}

export default App;
