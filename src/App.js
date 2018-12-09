import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorited = false;
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songData: songData
    }
  }

  // createSongData = (songData) => {
  //   return songData.forEach((song, i) => {
  //     song.id = i;
  //     song.favorited = false;
  //   })
  // }

  markFavorite = (index) => {
    const updatedSongData = this.state.songData;
    updatedSongData[index].favorite = true;
    this.setState({
      songData: updatedSongData
    });
  }
  render() {
    console.log("data", songData)

    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData} markFavoritedCallback={this.markFavorite}/>
        </main>
      </div>
    );
  }
}

export default App;
