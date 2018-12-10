import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
});

class App extends Component {
    constructor(props){
        super(props);
        // this.handleFavorite = this.handleFavorite.bind(this);
        this.state = {
            songs: songData,
            playlists: {
                morningTracks: songData.slice(0, songData.length / 2),
                eveningTracks: songData.slice(songData.length / 2, songData.length)
            }

        };
    }
    handleFavorite = (id) => {
        const updateSongs = this.state.songs;
        updateSongs[id].favorite = !updateSongs[id].favorite;
        this.setState(() => {
            return {
                songs: updateSongs
            };
        });
    };

    handleTop = (id) => {
        const orderSongs = this.state.songs.slice(0);
        console.log(orderSongs);



    };

    handleSwitch = (id) => {
        console.log(this.state.songs)
    };


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
              tracks={songData}
              handleFavoriteCallback={this.handleFavorite.bind(this)}
              handleTopCallback={this.handleTop.bind(this)}
              handleSwitchCallback={this.handleSwitch.bind(this)}
          />
        </main>
      </div>
    );
  }
}

export default App;
