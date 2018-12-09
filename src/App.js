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
      songs: songData
    };
  };

  changeFavorite = (songId) => {
    const newSongs = this.state.songs;
    const index = newSongs.findIndex(k => k.id === songId);
    newSongs[index].favorite = !newSongs[index].favorite;

    this.setState({
      songs: newSongs
    });
  };

  moveToTop = (songId) => {
    const newSongs = this.state.songs.slice(0);
    const index = newSongs.findIndex(k => k.id === songId);
    const temp = newSongs.splice(index, 1);
    index <= this.state.songs.length / 2 ? newSongs.unshift(temp[0]) : newSongs.splice(Math.round(newSongs.length / 2), 0, temp[0]);

    this.setState({
      songs: newSongs
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
            tracks={this.state.songs}
            changeFavoriteCallback={this.changeFavorite}
            moveToTopCallback={this.moveToTop} />
        </main>
      </div>
    );
  }
}

export default App;
