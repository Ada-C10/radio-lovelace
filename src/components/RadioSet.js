import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


class RadioSet extends Component {

  constructor(props) {
    super(props);
    console.log(`Radio set for ${props.tracks.length} tracks`);

    this.state = {
        morningTracks: this.props.tracks.slice(0, this.props.tracks.length / 2),
        eveningTracks: this.props.tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)
      };
  }

  switchPlayList = (track, favStar) => {
    let morningTrackArray = [...this.state.morningTracks]
    let eveningTrackArray = [...this.state.eveningTracks]

    if (track.props.side === "Morning") {
      for (let song of morningTrackArray) {
        if (track.props.title === song.title){
          let removedTrack = morningTrackArray.splice(track.props.id, 1)
          eveningTrackArray.unshift(removedTrack[0])
          eveningTrackArray[0].favorite = favStar

          this.setState({morningTracks: morningTrackArray}, () => {
            console.log(this.state.morningTracks)
          });
          this.setState({eveningTracks: eveningTrackArray}, () => {
            console.log(this.state.eveningTracks)
          });
        }
      }
    } else {
      for (let song of eveningTrackArray) {
        if (track.props.title === song.title){
          let removedTrack = eveningTrackArray.splice(track.props.id, 1)
          morningTrackArray.unshift(removedTrack[0])
          morningTrackArray[0].favorite = favStar

          this.setState({morningTracks: morningTrackArray}, () => {
            console.log(this.state.morningTracks)
          });
          this.setState({eveningTracks: eveningTrackArray}, () => {
            console.log(this.state.eveningTracks)
          });
        }
      }
    }
  }

  sortTracks = (track) => {
    if (track.props.side === "Morning") {
      for (let song of this.state.morningTracks) {
        if (track.props.title === song.title){
          let trackArray = [...this.state.morningTracks]
          let removedTrack = trackArray.splice(track.props.id, 1)
          trackArray.unshift(removedTrack[0])
          this.setState({morningTracks: trackArray}, () => {
            console.log(this.state.morningTracks)
          });
        }
      }
    } else {
      for (let song of this.state.eveningTracks) {
          if (track.props.title === song.title) {
            let trackArray = [...this.state.eveningTracks]
            let removedTrack = trackArray.splice(track.props.id, 1)
            trackArray.unshift(removedTrack[0])
            this.setState({eveningTracks: trackArray}, () => {
              console.log(this.state.eveningTracks)
            });
          }
      }
    }
  }


  render() {

      return (
        <div className="radio-set">
          <section className="radio-set--playlist-container">
            <Playlist
              side="Morning"
              tracks={this.state.morningTracks}
              switchPlayListCallback = {this.switchPlayList}
              sortTracksCallback = {this.sortTracks}
            />
            <Playlist
              side="Evening"
              tracks={this.state.eveningTracks}
              switchPlayListCallback = {this.switchPlayList}
              sortTracksCallback = {this.sortTracks}
            />
          </section>
        </div>
      );
  };

}

export default RadioSet;
