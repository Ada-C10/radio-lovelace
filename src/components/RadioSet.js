import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    }
  };

  toggleAsFavorite = (index, side) => {
    let morningTracks = this.state.morningTracks;
    let eveningTracks = this.state.eveningTracks;
    let track = (side === "Morning" ? morningTracks[index] : eveningTracks[index])
    let action = (track.favorite ? "Unfavoriting" : "Favoriting")
    console.log(`${action} ${track.id}. ${track.title}`)

    track.favorite = !track.favorite
    this.setState({
      morningTracks: morningTracks,
      eveningTracks: eveningTracks
    })
  }

  moveTrackToTop = (index, side) => {
    let morningTracks = this.state.morningTracks;
    let eveningTracks = this.state.eveningTracks;
    let playlist = (side === "Morning" ? morningTracks : eveningTracks);
    let track = playlist.splice(index, 1)[0];
    playlist.unshift(track);

    console.log(`Moving ${track.id}. ${track.title} to top of playlist`)

    if (side === "Morning") {
      this.setState({ morningTracks: playlist })
    } else {
      this.setState({ eveningTracks: playlist })
    }
  };

  switchLists = (index, side) => {
    let morningTracks = this.state.morningTracks;
    let eveningTracks = this.state.eveningTracks;
    let playlist = (side === "Morning" ? morningTracks : eveningTracks);
    let track = playlist.splice(index, 1)[0];

    if (side === "Morning") {
      morningTracks = playlist;
      eveningTracks.unshift(track);
    } else {
      morningTracks.unshift(track)
      eveningTracks = playlist
    }

    let destination = (side === "Morning" ? "Evening" : "Morning")
    console.log(`Moving ${track.id}. ${track.title} to top of ${destination} Playlist`)

    this.setState({
      morningTracks: morningTracks,
      eveningTracks: eveningTracks
    })
  };

  render() {
    console.log(`Radio set for ${this.props.tracks.length} tracks`);

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={ this.state.morningTracks }
            toggleAsFavoriteCallback={ this.toggleAsFavorite }
            moveTrackToTopCallback={ this.moveTrackToTop }
            switchListsCallback={ this.switchLists }
          />
          <Playlist
            side="Evening"
            tracks={ this.state.eveningTracks }
            toggleAsFavoriteCallback={ this.toggleAsFavorite }
            moveTrackToTopCallback={ this.moveTrackToTop }
            switchListsCallback={ this.switchLists }
          />
        </section>
      </div>
    );
  }
}

export default RadioSet;
