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
      tracks: songData,
      // favorite: false,
      playlists: {
        morningTracks: songData.slice(0, songData.length / 2),
        eveningTracks: songData.slice(songData.length / 2, songData.length)
      }
    };

  };

  clickFavorite = (songId) => {
    const newTracks = this.state.tracks;
    const index = newTracks.findIndex(track => track.id === songId)
    const song = this.find
    newTracks[index].favorite = !newTracks[index].favorite;

    this.setState({
      tracks: newTracks,
    })
  };

  moveTrackUp = (songId) => {
    const newTrackList = this.state.tracks.slice();
    const index = newTrackList.findIndex(track => track.id === songId);
    const temp = newTrackList.splice(index, 1);

    if (index <= this.state.playlists.morningTracks.length) {
      newTrackList.unshift(temp[0])
    } else {
      newTrackList.splice(this.state.playlists.morningTracks.length, 0, temp[0])
    }

    this.setState({
        tracks: newTrackList
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
            playlists={this.state.playlists}
            clickFavoriteCallback={this.clickFavorite}
            moveTrackUpCallback={this.moveTrackUp}
            />
        </main>
      </div>
    );
  }
}

export default App;
