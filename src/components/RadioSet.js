import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      morningTracks: this.props.tracks.slice(0, this.props.tracks.length / 2),
      eveningTracks: this.props.tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)
    }
  }

  render () {
    console.log(`Radio set for ${this.props.tracks.length} tracks`);
    const playlists = {
      morningTracks: this.state.morningTracks,
      eveningTracks: this.state.eveningTracks
    };
    
    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
          />
        </section>
      </div>
    );
  }
}

export default RadioSet;
