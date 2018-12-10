import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

class Playlist extends Component {

  constructor(props) {
    super();

    this.state = {
      tracks: props.tracks
    }
  };

  moveTrackToTop = (selectedTrackId) => {
    let selectedTrackIndex = this.state.tracks.findIndex(function(track) {
      return track.id === selectedTrackId;
    });
    console.log(`Moving track id ${selectedTrackId} "${this.state.tracks[`${selectedTrackIndex}`].title}" to front`);
    let newTrackList = [this.state.tracks[`${selectedTrackIndex}`]];
    const trackCountBeforeMovedTrack = selectedTrackIndex;
    newTrackList = newTrackList.concat(this.state.tracks.slice(0, trackCountBeforeMovedTrack));
    newTrackList =  newTrackList.concat(this.state.tracks.slice(selectedTrackIndex + 1));
    this.setState ({
      tracks: newTrackList
    });
  };

  calculatePlayTime(tracks) {
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

  render() {
    const trackCount = this.state.tracks.length;
    const playtime = this.calculatePlayTime(this.state.tracks);
    const trackElements = this.state.tracks.map((track, i) => {
      // We use "spread syntax" here to pass in all the properties of
      // the variable 'track' as props. Go look it up!
      return (
        <Track
          key={i}
          {...track}
          moveTrackToTopCallback={ this.moveTrackToTop }
        />
      );
    });

    return (
      <div className="playlist">
        <h2>{this.props.side} Playlist</h2>
        <p>
          {trackCount} tracks - {playtime}
        </p>
        <ul className="playlist--track-list">
          { trackElements }
        </ul>
      </div>
    );
  }

}


// const Playlist = (props) => {
//   const tracks = props.tracks;
//   const trackCount = tracks.length;
//   const playtime = calculatePlayTime(tracks);
//   const trackElements = tracks.map((track, i) => {
//     // We use "spread syntax" here to pass in all the properties of
//     // the variable 'track' as props. Go look it up!
//     return (
//       <Track
//         key={i}
//         {...track}
//       />
//     );
//   });
//
//   return (
//     <div className="playlist">
//       <h2>{props.side} Playlist</h2>
//       <p>
//         {trackCount} tracks - {playtime}
//       </p>
//       <ul className="playlist--track-list">
//         {trackElements}
//       </ul>
//     </div>
//   );
// }

Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
}

export default Playlist;
