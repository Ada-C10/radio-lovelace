import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {

  constructor(props) {
    super();

    this.state = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    }
  };

  toggleAsFavorite = (index, playlist) => {
    const newState = { ...this.state }
    const newPlaylist = newState[playlist];
    const track = newPlaylist[index];

    let action = (track.favorite ? "Unfavoriting" : "Favoriting");
    console.log(`${action} ${track.id}. ${track.title}`);

    track.favorite = !track.favorite;
    this.setState(newState)

    // Dan's approach
    // I'm not sure how they compare?

    // const newState = {...this.state};
    // const newPlaylist = [...newState[playlist]];
    // const track = {...newPlaylist[index]};
    //
    // let action = (track.favorite ? "Unfavoriting" : "Favoriting")
    // console.log(`${action} ${track.id}. ${track.title}`)
    //
    // newPlaylist[index] = track;
    // newState[playlist] = newPlaylist;
    //
    // track.favorite = !track.favorite
    // this.setState( newState )
  }

  moveTrackToTop = (index, playlist) => {
    const newState = { ...this.state }
    const newPlaylist = newState[playlist];
    const track = newPlaylist.splice(index, 1)[0];
    newPlaylist.unshift(track);

    console.log(`Moving ${track.id}. ${track.title} to top of playlist`);

    this.setState(newState);
  };

  switchLists = (index, fromPlaylist, toPlaylist ) => {
    const newState = { ...this.state };
    const newOrigin = newState[fromPlaylist];
    const newDestination = newState[toPlaylist];
    const track = newOrigin.splice(index, 1)[0];
    newDestination.unshift(track);

    console.log(`Moving ${track.id}. ${track.title} to top of ${toPlaylist} Playlist`)

    this.setState(newState);
  };

  render() {
    console.log(`Radio set for ${this.props.tracks.length} tracks`);

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={ this.state.morningTracks }
            toggleAsFavoriteCallback={ i => this.toggleAsFavorite(i, "morningTracks") }
            moveTrackToTopCallback={ i => this.moveTrackToTop(i, "morningTracks") }
            switchListsCallback={ i => this.switchLists(i, "morningTracks", "eveningTracks") }
          />
          <Playlist
            side="Evening"
            tracks={ this.state.eveningTracks }
            toggleAsFavoriteCallback={ i => this.toggleAsFavorite(i, "eveningTracks") }
            moveTrackToTopCallback={ i => this.moveTrackToTop(i, "eveningTracks") }
            switchListsCallback={ i => this.switchLists(i, "eveningTracks", "morningTracks") }
          />
        </section>
      </div>
    );
  }
}

export default RadioSet;
