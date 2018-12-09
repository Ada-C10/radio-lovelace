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
    let newSongs = this.state.songs;
    newSongs[songId].favorite = !newSongs[songId].favorite;

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
            changeFavoriteCallback={this.changeFavorite} />
        </main>
      </div>
    );
  }
}

export default App;
