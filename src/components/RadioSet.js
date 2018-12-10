import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const splitTracksByPlaytimes = (tracks) => {
  let morningTimes = 0;
  let eveningTimes = 0;

  const playlists = {
    morningTracks: [],
    eveningTracks: []
  }

  tracks.forEach((track) => {
    const times = track.playtime.split(':');
    if (morningTimes > eveningTimes){
      playlists.eveningTracks.push(track);
      eveningTimes += parseInt(times[0]);
    } else {
      playlists.morningTracks.push(track);
      morningTimes += parseInt(times[0]);
    }
  });

  return (
    playlists: {
      morningTracks: morningTracks,
      eveningTracks: eveningTracks
    }
  );
}


class RadioSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: splitTracksByPlaytimes(this.props.tracks)
      // playlists: {
      //   morningTracks: this.props.tracks.slice(0, this.props.tracks.length / 2),
      //   eveningTracks: this.props.tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)
      // }
    };
  }
  switchLists = (index, side) => {

    const morningTracks = this.state.playlists.morningTracks
    const eveningTracks = this.state.playlists.eveningTracks
    const trackToMove = this.state.playlists[`${side.toLowerCase()}Tracks`][index]

    if (side === "Morning"){
      eveningTracks.unshift(trackToMove)
      morningTracks.splice(index, 1);
    } else {
      morningTracks.unshift(trackToMove)
      eveningTracks.splice(index, 1);
    }

    this.setState( { playlists: { morningTracks: morningTracks, eveningTracks: eveningTracks } } );
  }

  render() {
    console.log(`Radio set for ${this.props.tracks.length} tracks`);

    return (
      <div className="radio-set">
      <section className="radio-set--playlist-container">
      <Playlist
      side="Morning"
      tracks={this.state.playlists.morningTracks}
      switchListsProp={this.switchLists}
      />
      <Playlist
      side="Evening"
      tracks={this.state.playlists.eveningTracks}
      switchListsProp={this.switchLists}
      />
      </section>
      </div>
    );
  }
};

export default RadioSet;
