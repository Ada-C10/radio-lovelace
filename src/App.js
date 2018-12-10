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
        this.handleFavorite = this.handleFavorite.bind(this);
        this.state = {
            songs: songData
        };
    }
    handleFavorite = (id) => {
        const song = this.state.songs[id];
        console.log(song);
        song.favorite = !song.favorite;
        console.log(song);
        this.setState(()=>{
            return {
                songs: !this.state.songs[id].favorite
            }
        });
    }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
              tracks={songData}
              handleFavoriteCallback={this.handleFavorite}
          />
        </main>
      </div>
    );
  }
}

export default App;
