import React from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: props.tracks
    }
  }
// Calculate total Playlist time
// Must specify playlist.morningTracks or playlist.eveningTracks?
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

  trackStarClicked = (trackIndex) => {
    console.log(`track with index ${trackIndex} star clicked - Playlist callback`);
    let updatedFavoriteData = this.state.tracks;
    updatedFavoriteData[trackIndex].isFavorite = !updatedFavoriteData[trackIndex].isFavorite;
    this.setState({tracks: updatedFavoriteData});
  }
  // Must specify morning or evening?
  // const Playlist = (props) => {
render() {
    const tracks = this.state.tracks;
    const trackCount = tracks.length;
    const playtime = this.calculatePlayTime(tracks);
    const trackElements = tracks.map((track, i) => {
      // We use "spread syntax" here to pass in all the properties of
      // the variable 'track' as props. Go look it up!
      // track has: title, artist, playtime, albumart,
      return (
        <Track
          key={i}
          index={i}
          {...track}
          isFavorite={this.trackStarClicked}
        />
      );
    });

  // props = Playlist {side: m /e , tracks: p.m / p.e}
    return (
      <div className="playlist">
        <h2>{this.props.side} Playlist</h2>
        <p>
          {trackCount} tracks - {playtime}
        </p>
        <ul className="playlist--track-list">
          {trackElements}
        </ul>
      </div>
    );
  }
}


Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
}

export default Playlist;
