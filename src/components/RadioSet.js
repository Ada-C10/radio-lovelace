import React from 'react';

import "./styles/RadioSet.css";
import Playlist from './Playlist';

class RadioSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: {
        morningTracks: this.props.tracks.slice(0, props.tracks.length / 2),
        eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
      }
    }
  }
  // playlists is an object with --
  // morningTracks: first sliced half of tracks list from App &
  // eveningTracks: second sliced half of tracks list from App

  // Move track from one playlist to top of other
  playlistSwitch = (trackIndex, side) => {
    console.log(`radioset event handler`);
    let radioSetPlaylist = this.state.playlists;

    if (side === "Morning") {
      radioSetPlaylist.eveningTracks.unshift(radioSetPlaylist.morningTracks.splice(trackIndex, 1)[0]);
    } else if (side === "Evening") {
      radioSetPlaylist.morningTracks.unshift(radioSetPlaylist.eveningTracks.splice(trackIndex, 1)[0]);
    }

    this.setState({
      playlists: radioSetPlaylist
    })
  };

  render() {

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.playlists.morningTracks}
            moveTrack={this.playlistSwitch}
          />
          <Playlist
            side="Evening"
            tracks={this.state.playlists.eveningTracks}
            moveTrack={this.playlistSwitch}
          />
        </section>
      </div>
    );
  };


}
export default RadioSet;
