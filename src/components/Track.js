import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/
class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  onFavoriteChange = (event) => {
    this.props.markFavoriteCallback(this.props.id);
  }

  render () {
    const {id, title, artist, playtime, albumart, favorite} = this.props;

    return (
      <li className="track">
        <img className="track--albumart" alt={`album art for ${title}`} src={albumart} />
        <h3 className="track--title">{title}</h3> //look here
        <input
          type="checkbox"
          className="track--favorite"
          checked={!favorite}
          onChange={this.onFavoriteChange}
        />
        <p className="track--artist">{artist}</p>
        <p className="track--playtime">{playtime}</p>
        <button
          className="track--control track--to-top"
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
};



export default Track;
