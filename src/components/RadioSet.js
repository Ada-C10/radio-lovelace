import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends Component {

  constructor(props) {
    super(props);
    console.log(`Radio set for ${props.tracks.length} tracks`);

  }

  render() {

  const morningTracks = this.props.tracks.slice(0, this.props.tracks.length / 2);
  const eveningTracks = this.props.tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)

      return (
        <div className="radio-set">
          <section className="radio-set--playlist-container">
            <Playlist
              side="Morning"
              tracks={morningTracks}
              sortTracksCallback = {this.props.sortTracksCallback}
            />
            <Playlist
              side="Evening"
              tracks={eveningTracks}
              sortTracksCallback = {this.props.sortTracksCallback}
            />
          </section>
        </div>
      );
  };

}

export default RadioSet;
