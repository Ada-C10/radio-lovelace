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

  removeTrack(list, song) {
    return list.filter(element => element !== song)
  }

  updateFavorite = (id) => {
    let trackList = this.state.tracks;
    let song = trackList.find(song => song.id === id)
    for (const track in trackList) {
       if (trackList[track].id === song.id) {
          trackList[track].favorite = !trackList[track].favorite;
          break;
       }
    }
    this.setState({tracks: trackList});
  };

  updateTrackOrder = (id) => {
    let trackList = this.state.tracks;
    const song = trackList.find(song => song.id === id)
    let updatedTracklist = this.removeTrack(trackList, song);

    if(song.id < this.state.tracks.length / 2){
      updatedTracklist.unshift(song);
      this.setState({tracks: updatedTracklist});
    } else {
      updatedTracklist.splice(this.state.tracks.length / 2, 0, song)
      this.setState({tracks: updatedTracklist});
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
            updateTrackOrderCallback={ this.updateTrackOrder }
            updateFavoriteCallback={ this.updateFavorite }
          />
        </section>
      </div>
    );
  }
};

export default RadioSet;
