import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';


class Playlist extends Component {

  constructor(props) {
    super(props);
    this.side = props.side;
    this.tracks = props.tracks;
    this.trackCount = props.tracks.length;
    this.playtime = this.calculatePlayTime(this.tracks)

    this.state = {
        trackList: props.tracks

      };

  }

calculatePlayTime = (tracks) => {
    let minutes = 0;
    let seconds = 0;
    tracks.forEach((track) => {
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


// sortTracks = (index) => {
//   console.log(this.state.trackList)
//   // console.log(index)
//   for (let track of this.state.trackList) {
//     if (track.id === index) {
//       let trackArray = [...this.state.trackList]
//       let removedTrack = trackArray.splice(index, 1)
//       trackArray.unshift(removedTrack[0])
//       console.log(trackArray)
//       this.setState({tracklist: trackArray})
//     }
//   }
// }


render(props) {

  const trackList = this.state.trackList
        .map((track, i)  => {
            return (
              <Track
                key={i}
                {...track}
                id={i}
                side={this.side}
                sortTracksCallback = {this.props.sortTracksCallback}
              />
            )
        })


    return (
      <div className="playlist">
        <h2>{this.props.side} Playlist</h2>
        <p>
          {this.trackCount} tracks - {this.playtime}
        </p>
        <ul className="playlist--track-list">
          {trackList}
        </ul>
      </div>
    );
}

// Playlist.propTypes = {
//   tracks: PropTypes.array,
//   side: PropTypes.string,
// }

}

export default Playlist;
