import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songData: songData,
      morningTracks: songData.slice(0, songData.length / 2),
      eveningTracks: songData.slice(songData.length / 2, songData.length)
    }
  }

  markFavorited = (index) => {
    const updatedSongData = this.state.songData;
    updatedSongData[index].favorite = true;
    this.setState({
      songData: updatedSongData
    });
  }

  moveToTop = (index, side) => {
    //https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another

    let updatedSongData = this.state.songData;
    let new_index = 0;
    side === "Morning" ? new_index = 0 : new_index = songData.length;
    updatedSongData.splice(new_index, 0, updatedSongData.splice(index, 1)[0]);
    this.setState({
      songData: updatedSongData
    });
    console.log("top working", index, new_index, side)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData} eveningTracks={this.state.eveningTracks} morningTracks={this.state.morningTracks} appMarkFavoritedCallback={this.markFavorited}
            appToTopCallback={this.moveToTop} />
        </main>
      </div>
    );
  }
}

export default App;
