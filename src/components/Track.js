import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/
const Track = ({id, title, artist, playtime, albumart, favorite, markFavoriteCallback, toTopCallback, switchListsCallback}) => {

  const onFavoriteChange = () => {
    markFavoriteCallback(id);
  }

  const onToTop = () => {
    toTopCallback(id);
  }

  const onSwitch = () => {
    switchListsCallback(id);
  }

  return (
    <li className="track">
      <img className="track--albumart" alt={`album art for ${title}`} src={albumart} />
      <h3 className="track--title">{title}</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={!favorite}
        onChange={onFavoriteChange}
      />
      <p className="track--artist">{artist}</p>
      <p className="track--playtime">{playtime}</p>
      <button
        className="track--control track--to-top"
        onClick={onToTop}
        >
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        onClick={onSwitch}
        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );
};

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
  id: PropTypes.number,
  markFavoriteCallback: PropTypes.func,
  toTopCallback: PropTypes.func,
  switchListsCallback: PropTypes.func
}

export default Track;
