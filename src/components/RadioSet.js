import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends Component {

  constructor(props) {
    super(props);
    console.log(`Radio set for ${props.tracks.length} tracks`);
    // this.morningTracks = props.tracks.slice(0, props.tracks.length / 2);
    // this.eveningTracks = props.tracks.slice(props.tracks.length / 2, props.tracks.length)

    this.state = {
        morningTracks: props.tracks.slice(0, props.tracks.length / 2),
        eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
      };
  }

  sortTracks = (track) => {
    console.log(track.props.id)
    console.log(track.props.side)
    if (track.props.side === "Morning") {
      for (let song of this.state.morningTracks) {
        if (song.id === track.props.id) {
          let trackArray = [...this.state.morningTracks]
          let removedTrack = trackArray.splice(song.id, 1)
          console.log(removedTrack)
          trackArray.unshift(removedTrack[0])
          console.log(trackArray)
          this.setState({morningTracks: trackArray}, () => {
            console.log(this.state.morningTracks)
          });
        }
      }
    } else if (track.props.side === "Evening") {

    }


    // console.log(index)
    // for (let track of this.state.trackList) {
    //   if (track.id === index) {
    //     let trackArray = [...this.state.trackList]
    //     let removedTrack = trackArray.splice(index, 1)
    //     trackArray.unshift(removedTrack[0])
    //     console.log(trackArray)
    //     this.setState({tracklist: trackArray})
    //   }
    // }
  }

  render() {

      return (
        <div className="radio-set">
          <section className="radio-set--playlist-container">
            <Playlist
              side="Morning"
              tracks={this.state.morningTracks}
              sortTracksCallback = {this.sortTracks}
            />
            <Playlist
              side="Evening"
              tracks={this.state.eveningTracks}
              sortTracksCallback = {this.sortTracks}
            />
          </section>
        </div>
      );
  };

}

export default RadioSet;
