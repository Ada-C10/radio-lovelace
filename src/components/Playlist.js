import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';


class Playlist extends Component {

  constructor(props) {
    super(props);

      this.state = {
          playList: props.tracks
        };
  }


  calculatePlayTime = (tracks) => {
      let minutes = 0;
      let seconds = 0;
      console.log(tracks[0])
      this.state.playList.forEach((track) => {
        const times = track.playtime.split(':');
        minutes += parseInt(times[0]);
        seconds += parseInt(times[1]);
      });

    minutes += Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;

    seconds = ("" + seconds).padStart(2, "0");
    minutes = ("" + minutes).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  sortTracks = (track) => {
    console.log("evening")
    console.log(this.state.playList)
      for (let song of this.state.playList) {
        if (track.props.id === song.id){
          console.log("found track", song.id)
          let trackArray = [...this.state.playList]
          let removedTrack = trackArray.splice(song.id, 1)
          trackArray.unshift(removedTrack[0])
          this.setState({playList: trackArray}, () => {
            console.log(this.state.playList)
          });
        } else if (track.props.id + 43 === song.id) {
          console.log("found track", song.id)
          let trackArray = [...this.state.playList]
          let removedTrack = trackArray.splice(song.id-43, 1)
          console.log(removedTrack)
          trackArray.unshift(removedTrack[0])
          this.setState({playList: trackArray}, () => {
            console.log(this.state.playList)
          });
        }
      }

  }

render() {
  console.log(this.state.playList, "HERE")
  const playtime = this.calculatePlayTime(this.state.playList)

  const trackList = this.state.playList
        .map((track, i)  => {
            return (
              <Track
                key={`${track.title}${track.artist}`}
                {...track}
                id={i}
                side={this.props.side}
                sortTracksCallback = {this.sortTracks}
              />
            )
        })


    return (
      <div className="playlist">
        <h2>{this.props.side} Playlist</h2>
        <p>
          {this.props.tracks.length} tracks - {playtime}
        </p>
        <ul className="playlist--track-list">
          {trackList}
        </ul>
      </div>
    );
}

}

export default Playlist;
