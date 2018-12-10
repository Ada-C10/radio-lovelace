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
        };
    };

    handleFavorite = (id) => {
        const updateSongs = this.state.songs;
        updateSongs[id].favorite = !updateSongs[id].favorite;
        this.setState(() => {
            return {
                songs: updateSongs
            };
        });
    };

    handleTop = (id, side) => {
        console.log(id, side);
        let orderSongs = this.state.songs;
        let temp = orderSongs[id];
        let tempIndex = orderSongs.findIndex(function(x) {
            return x === temp
        });

        console.log('temp index', tempIndex);
        orderSongs = orderSongs.filter(x => x !== temp);
        console.log('filtered', orderSongs);
        if (side === "Morning"){
            orderSongs.unshift(temp)
        } else {
            orderSongs.splice(orderSongs.length/2 + 1, 0, temp)
        }
        console.log('final order', orderSongs);
        this.setState(() => {
            return {
                songs: orderSongs
            };
        });



    };

    handleSwitch = (id) => {
        // console.log(this.state.songs)
        const playlistSwitch = this.state.songs
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
