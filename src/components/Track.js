import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

const Track = ({index, title, artist, playtime, albumart, favorite,
                toggleAsFavoriteCallback,
                moveTrackToTopCallback,
                switchListsCallback}) => {
  return (
    <li className="track">
      <img className="track--albumart" alt={`album art for ${ title }`} src={ albumart } />
      <h3 className="track--title">{ title }</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={ !favorite }
        onChange={ toggleAsFavoriteCallback }
      />
      <p className="track--artist">{artist}</p>
      <p className="track--playtime">{playtime}</p>
      <button
        className="track--control track--to-top"
        onClick={ moveTrackToTopCallback }
        >
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        onClick={ switchListsCallback }
        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );
}

Track.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  playtime: PropTypes.string.isRequired,
  albumart: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  // toggleAsFavoriteCallback: PropTypes.func.isRequired,
  // moveTrackToTopCallback: PropTypes.func.isRequired,
  // switchListsCallback: PropTypes.func.isRequired
}

export default Track;
