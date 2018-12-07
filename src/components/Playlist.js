import React, { Component } from 'react';

import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

const calculatePlayTime = (tracks) => {
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

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.tracks,
    };
  }
  markFavorite  = (index) => {
    const updatedTracks = this.state.tracks
    updatedTracks[index].favorite = !updatedTracks[index].favorite
    this.setState({ tracks: updatedTracks });
  }

  moveToTop = (index) => {
    const updatedTracks = this.state.tracks
    updatedTracks.unshift(updatedTracks[index])
    updatedTracks.splice(index + 1, 1);
    this.setState({ tracks: updatedTracks });
  }

  switchListsCallback = (index) => {
    this.props.switchListsProp(index, this.props.side);
  }

  render() {
    const tracks = this.state.tracks;
    const trackCount = tracks.length;
    const playtime = calculatePlayTime(tracks);
    const trackElements = tracks.map((track, i) => {
      // We use "spread syntax" here to pass in all the properties of
      // the variable 'track' as props. Go look it up!

      return (
        <Track
        key={`${track.title}${track.artist}`}
        markFavoriteCallback={this.markFavorite}
        moveToTopCallback={this.moveToTop}
        switchListsPlaylistCallback={this.switchListsCallback}
        index={i}
        {...track}
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
