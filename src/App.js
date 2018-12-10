import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: songData

    }
  }

  goTop = (index)=>{
     let updatedTracks = this.state.tracks;
     let length2 = updatedTracks.length / 2;

     let temp = updatedTracks.splice(index,1)[0];
     console.log(temp);
     if (index >= length2) {
       updatedTracks.splice(length2, 0, temp);
     }else{
       updatedTracks.unshift(temp);
     }
     this.setState({tracks: updatedTracks});
  }


  render() {


    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.tracks} appCallback={this.goTop}/>
        </main>
      </div>
    );
  }
}

export default App;
