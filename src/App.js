import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
  song.index = i;
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songData: songData
    }
}

  findSongIndex = (SondData, songID) => {
    let songIndex = songData.findIndex(song => song.id === songID)
  }
// need songID and songlist
  markFavorite = (songID) => {
    let updatedSongData = this.state.songData;
    let song = updatedSongData.find(item => item === songData[songID]);

    song.favorite = true;

    this.setState({songData: updatedSongData});
  }

  sendToTop = (songIndex) => {
    let updatedSongData = this.state.songData;
    let song = updatedSongData.find(item => item === songData[songIndex]);
    console.log(song.OfIndex);
    // if songindex is between second value, then move it to top of second array
    // updatedSongData.unshift(updatedSongData.splice(songIndex, 1)[0]);
    if (songIndex < 42) {
      updatedSongData = updatedSongData.filter(item => item !== songData[songIndex]);
      updatedSongData.unshift(songData[songIndex]);
      // updatedSongData[songIndex].index = 0
    } else {
      updatedSongData = updatedSongData.filter(item => item !== songData[songIndex]);
      updatedSongData.splice(43, 0, songData[songIndex]);
      // updatedSongData[songIndex].index = 43
    }

    this.setState({songData: updatedSongData})
  }

  switchPlaylists = (songIndex) => {
    let updatedSongData = this.state.songData;

    if (songIndex < 42) {
      updatedSongData = updatedSongData.filter(item => item !== songData[songIndex]);
      updatedSongData.splice(43, 0, songData[songIndex]);
      // updatedSongData[songIndex].index = 43
    } else {
      updatedSongData = updatedSongData.filter(item => item !== songData[songIndex]);
      updatedSongData.unshift(songData[songIndex]);
      // updatedSongData[songIndex].index = 0

    }

    this.setState({songData: updatedSongData})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData}
          markFavoriteCallback={this.markFavorite}
          toTopCallback={this.sendToTop}
          switchPlaylistsCallback={this.switchPlaylists} />
        </main>
      </div>
    );
  }
}

export default App;
