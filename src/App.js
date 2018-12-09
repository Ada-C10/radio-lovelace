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
      songData: songData
    }
  }

  markFavorited = (index) => {
    const updatedSongData = this.state.songData;
    updatedSongData[index].favorite = true;
    this.setState({
      songData: updatedSongData
    });
  }

  moveToTop = (index) => {
   //  let updatedSongData = this.state.songData
   //
   // updatedSongData.splice(new_index, 0, arr.splice(index, 1)[0]);
       console.log("top working", index)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData} appMarkFavoritedCallback={this.markFavorited}
            appToTopCallback={this.moveToTop} />
        </main>
      </div>
    );
  }
}

export default App;
