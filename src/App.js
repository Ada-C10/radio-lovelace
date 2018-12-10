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
    console.log("index", index, "side", side)

    let updatedSongData = "";
    let newIndex = 0;
    let elemToUpdate = "";
    // side === "Morning" ? newIndex = 0 : newIndex = this.state.morningTracks.length;
    if (side === "Morning") {
      newIndex = 0
      updatedSongData = this.state.morningTracks
      elemToUpdate = updatedSongData.splice(index, 1)
      updatedSongData.splice(newIndex, 0, elemToUpdate[0])
      this.setState({
        morningTracks: updatedSongData
      })
    }
    else {
      newIndex = 0
      updatedSongData = this.state.eveningTracks
      elemToUpdate = updatedSongData.splice(index - 43, 1)
      console.log(updatedSongData)
      console.log(elemToUpdate)
      updatedSongData.splice(newIndex, 0, elemToUpdate[0])
      console.log(updatedSongData)
      this.setState({
        eveningTracks: updatedSongData
      })
    }
  }

  // console.log("before", this.state.songData)
  // const elemToUpdate = updatedSongData.splice(index, 1)
  // updatedSongData.splice(newIndex, 0, elemToUpdate[0])
  // this.setState({
  //   songData: updatedSongData
  // });
  // console.log("after", this.state.songData)
  // console.log("top working", index, newIndex, elemToUpdate)
  // }

  // switchLists = (index, side) => {
  //   console.log("switching", index, side)
  //   let updatedSongData = this.state.songData;
  //   if (side === "Morning"){
  //
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
            eveningTracks={this.state.eveningTracks}
            morningTracks={this.state.morningTracks}
            appMarkFavoritedCallback={this.markFavorited}
            appToTopCallback={this.moveToTop}
            appSwitchCallback={this.switchLists}
            />
        </main>
      </div>
    );
  }
}

export default App;
