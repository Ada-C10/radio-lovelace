import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: {
        // morningTracks: props.tracks.slice(0, props.tracks.length / 2),
        // eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
        morningTracks: props.tracks.filter(song => song.playlist === "Morning"),
        eveningTracks: props.tracks.filter(song => song.playlist === "Evening")
      }
    }
  }

  onFavorited = (trackIndex, side) => {
    if (side === "Morning") {
      let track = {...this.state.playlists.morningTracks[trackIndex]}
      track.favorite = !track.favorite
      let morningTracks = [...this.state.playlists.morningTracks];
      morningTracks.splice(trackIndex, 1, track)
      this.setState({
        playlists: {
          morningTracks,
          eveningTracks: this.state.playlists.eveningTracks
        }
      });
    } else {
      let track = {...this.state.playlists.eveningTracks[trackIndex]}
      track.favorite = !track.favorite
      let eveningTracks = [...this.state.playlists.eveningTracks];
      eveningTracks.splice(trackIndex, 1, track)
      this.setState({
        playlists: {
          morningTracks: this.state.playlists.morningTracks,
          eveningTracks,
        }
      });
    }
  }

  onSwapPlaylist = (trackIndex, side) => {
    let morningTracks = [...this.state.playlists.morningTracks];
    let eveningTracks = [...this.state.playlists.eveningTracks];

    if (side === "Morning") {
      let swapTrack = morningTracks.splice(trackIndex, 1)
      eveningTracks.unshift(swapTrack[0])
      this.setState({
        playlists: {
          morningTracks,
          eveningTracks
        }
      });
    } else {
      let swapTrack = eveningTracks.splice(trackIndex, 1)
      morningTracks.unshift(swapTrack[0])
      this.setState({
        playlists: {
          morningTracks,
          eveningTracks
        }
      });
    }
  }

  onChangeTrack = (trackIndex,side) => {

    if (side === "Morning") {
      let morningTracks = [...this.state.playlists.morningTracks];
      let newTopTrack = morningTracks.splice(trackIndex, 1)
      morningTracks.unshift(newTopTrack[0])
      this.setState({
        playlists: {
          morningTracks,
          eveningTracks: this.state.playlists.eveningTracks
        }
      });
    }
    else if (side === "Evening"){
      let eveningTracks = [...this.state.playlists.eveningTracks];
      let newTopTrack = eveningTracks.splice(trackIndex, 1)
      eveningTracks.unshift(newTopTrack[0])
      this.setState({
        playlists: {
          morningTracks: this.state.playlists.morningTracks,
          eveningTracks
        }
      });
    }
  };


  render() {
    console.log(this.state.playlists)
    console.log(`Radio set for ${this.props.tracks.length} tracks`);

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.playlists.morningTracks}
            topOfListCallback={this.onChangeTrack}
            swapPlaylistCallback={this.onSwapPlaylist}
            onFavoritedCallback = {this.onFavorited}
          />
          <Playlist
            side="Evening"
            tracks={this.state.playlists.eveningTracks}
            topOfListCallback={this.onChangeTrack}
            swapPlaylistCallback={this.onSwapPlaylist}
            onFavoritedCallback = {this.onFavorited}
          />
        </section>
      </div>
    );
  }
}


export default RadioSet;
