import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;  //set favorite prop
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songData: songData,
    }

  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData} markFavoriteCallback={this.markFavorite} sendToTopCallback={this.sendToTop}/>
        </main>
      </div>
    );
  }

  markFavorite = (song_id) => {
    const newSongData = this.state.songData;
    newSongData[song_id].favorite = true;
    this.setState({songData: newSongData});
  };

  sendToTop = (song_id) => {
    // let newSongData = this.state.songData;
    // newSongData = newSongData.filter(song => song.id !== song_id);
    // newSongData.unshift(song_id);
    // // newSongData.unshift(song_id);
    // // newSongData.splice(song_id);
    // this.setState({songData: newSongData});
    console.log("hit the callback");
  }


}

export default App;
