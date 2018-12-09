import React from 'react'
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

const Playlist = (props) => {
  let tracks = props.tracks;
  const trackCount = tracks.length;
  const playtime = calculatePlayTime(tracks);
  //
  // const moveToTop = (songId) => {
  //   console.log("I am now here and still confurseds");
  //   console.log(tracks[0].id);
  //   // console.log(songId);
  //   // console.log(tracks.findIndex(k => k.id === songId));
  //
  //   let temp = tracks.splice(tracks.findIndex(k => k.id === songId), 1);
  //   tracks.unshift(temp[0]);
  //   console.log(tracks[0].id);
  //
  // };

  const trackElements = tracks.map((track, i) => {
    // We use "spread syntax" here to pass in all the properties of
    // the variable 'track' as props. Go look it up!
    // console.log(props.changeFavorite);

    return (
      <Track
        key={i}
        {...track}
        changeFavoriteCallback={props.changeFavoriteCallback}
        moveToTopCallback={props.moveToTopCallback}
      />
    );
  });

  return (
    <div className="playlist">
      <h2>{props.side} Playlist</h2>
      <p>
        {trackCount} tracks - {playtime}
      </p>
      <ul className="playlist--track-list">
        {trackElements}
      </ul>
    </div>
  );
}

Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
}

export default Playlist;
