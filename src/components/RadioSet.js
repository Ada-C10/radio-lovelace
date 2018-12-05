import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks,
    }
  }

  updateFavorite(id) {
    let updatedTracks = this.state.tracks;
    updatedTracks[id].favorite = !updatedTracks[id].favorite;
    this.setState({tracks: updatedTracks});
  };

  updateTrackOrder(id) {
    let trackList = this.state.tracks;
    let song = trackList.splice(trackList[id].id, 1)[0];
    if(trackList[id].id <= this.state.tracks.length){
      trackList.unshift(song);
      this.setState({tracks: trackList});
    } else {
      trackList.unshift(song);
      this.setState({tracks: trackList});
    };
  };

  render() {
    console.log(`Radio set for ${this.state.tracks.length} tracks`);
    const playlists = {
      morningTracks: this.state.tracks.slice(0, this.state.tracks.length / 2),
      eveningTracks: this.state.tracks.slice(this.state.tracks.length / 2, this.state.tracks.length)
    };

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
            updateTrackOrderCallback={ this.updateTrackOrder }
            updateFavoriteCallback={ this.updateFavorite }
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
          />
        </section>
      </div>
    );
  }
};

export default RadioSet;
