import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

const Track = (props) => {
  const toggleFavorite = () => {
    props.updateFavoriteCallback(props.id);
  }

  const onTopClicked = () => {
    props.updateTrackOrderCallback(props.id);
  }

  return (
    <li className="track">
      <img className="track--albumart" alt={`album art for ${props.title}`} src={props.albumart} />
      <h3 className="track--title">{props.title}</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={!props.favorite}
        onChange={ toggleFavorite }
      />
    <p className="track--artist">{props.artist}</p>
      <p className="track--playtime">{props.playtime}</p>
      <button
        className="track--control track--to-top" onClick={ onTopClicked }
        >
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );
}

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
}

export default Track;
