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
      tracks: songData,
      leftCount: songData.length / 2,
    }
  }



  goTop = (index)=>{
     let updatedTracks = this.state.tracks;
     let length2 = this.state.leftCount;

     let temp = updatedTracks.splice(index,1)[0];

     if (index >= length2) {
       updatedTracks.splice(length2, 0, temp);
     }else{
       updatedTracks.unshift(temp);
     }
     this.setState({tracks: updatedTracks});
  }

  switchSide = (index)=>{
     let updatedTracks = this.state.tracks;
     let updatedLeftCount = this.state.leftCount;

     let temp = updatedTracks.splice(index,1)[0];

     if (index >= updatedLeftCount) {
       updatedLeftCount += 1;
       updatedTracks.unshift(temp);

     }else{
       updatedLeftCount -= 1;
       updatedTracks.splice(updatedLeftCount, 0, temp);
     }
     this.setState({tracks: updatedTracks});
     this.setState({leftCount: updatedLeftCount});

  }


  render() {


    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet
            tracks={this.state.tracks}
            appCallback={this.goTop}
            appSwitchCallback={this.switchSide}
            leftTrekCount={this.state.leftCount}
          />
        </main>
      </div>
    );
  }
}

export default App;
