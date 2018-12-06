import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends Component {

  constructor(props) {
    super(props);
    console.log(`Radio set for ${props.tracks.length} tracks`);

    this.state = {
        morningTracks: this.props.tracks.slice(0, this.props.tracks.length / 2),
        eveningTracks: this.props.tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)
      };
  }

  switchPlayList = (track) => {
    console.log(track)
  }

  render() {


      return (
        <div className="radio-set">
          <section className="radio-set--playlist-container">
            <Playlist
              side="Morning"
              tracks={this.state.morningTracks}
              switchPlayListCallback = {this.switchPlayList}
            />
            <Playlist
              side="Evening"
              tracks={this.state.eveningTracks}
              switchPlayListCallback = {this.switchPlayList}
            />
          </section>
        </div>
      );
  };

}

export default RadioSet;
