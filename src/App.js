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

  findSong = (songList, id) => {
    return songList.find(item => item === songData[id])
  }
  // findSongIndex = (songList, songID, song) => {
  //   songList.findIndex(item => item === song)
  // }
  markFavorite = (songID) => {
    let updatedSongData = this.state.songData;
    let song = this.findSong(updatedSongData, songID);
    // let song = updatedSongData.find(item => item === songData[songID]);

    song.favorite = true;

    this.setState({songData: updatedSongData});
  }

  sendToTop = (songID) => {
    let updatedSongData = this.state.songData;
    let song = this.findSong(updatedSongData, songID);
    let songIndex = updatedSongData.findIndex(item => item === song)

    updatedSongData = updatedSongData.filter(item => item !== song);

    // if songindex is between second value, then move it to top of second array
    // updatedSongData.unshift(updatedSongData.splice(songIndex, 1)[0]);
    if (songIndex < 42) {
      updatedSongData.unshift(song);
    } else {
      updatedSongData.splice(43, 0, song);
    }

    this.setState({songData: updatedSongData})
  }

  switchPlaylists = (songID) => {
    let updatedSongData = this.state.songData;
    let song = this.findSong(updatedSongData, songID);
    let songIndex = updatedSongData.findIndex(item => item === song)
    updatedSongData = updatedSongData.filter(item => item !== song);


    if (songIndex < 42) {
      updatedSongData.splice(43, 0, song);
    } else {
      updatedSongData.unshift(song);
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
