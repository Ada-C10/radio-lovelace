import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';


class Playlist extends Component {


  calculatePlayTime = (tracks) => {
      let minutes = 0;
      let seconds = 0;
      this.props.tracks.forEach((track) => {
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
  const playtime = this.calculatePlayTime(this.props.tracks)

  const trackList = this.props.tracks
        .map((track, i)  => {
            return (
              <Track
                key={`${track.title}${track.artist}`}
                {...track}
                id={i}
                side={this.props.side}
                switchPlayListCallback = {this.props.switchPlayListCallback}
                sortTracksCallback = {this.props.sortTracksCallback}
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
