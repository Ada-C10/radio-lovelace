import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {

  constructor(props) {
    super(props);

    let tracks = this.props.tracks;
    for (const track of tracks) {
      track['favorite'] = false;
    }

    this.state = {
      morningTracks: tracks.slice(0, this.props.tracks.length / 2),
      eveningTracks: tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)
    }
  }

  switchTrack = (index, side) => {
    let track = ''

    let morningTracks = this.state.morningTracks;
    let eveningTracks = this.state.eveningTracks;

    if (side === 'Morning') {
      track = morningTracks.splice(index, 1)[0];
      eveningTracks.unshift(track);
    }
    else {
      track = eveningTracks.splice(index, 1)[0];
      morningTracks.unshift(track);
    }

    this.setState({
      morningTracks: morningTracks,
      eveningTracks: eveningTracks
    });

  }

  markFavorite = (index, side) => {

    if (side === 'Morning') {
      let tracks = this.state.morningTracks;
      tracks[index]['favorite'] = !tracks[index]['favorite'];
      this.setState({
        morningTracks: tracks
      })
    }
    else {
      let tracks = this.state.eveningTracks;
      tracks[index]['favorite'] = !tracks[index]['favorite'];
      this.setState({
        eveningTracks: tracks
      })
    }


  }

  render () {
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
            switchTrackCallback={this.switchTrack}
            favoriteCallback={this.markFavorite}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
            switchTrackCallback={this.switchTrack}
            favoriteCallback={this.markFavorite}
          />
        </section>
      </div>
    );
  }
}

export default RadioSet;
