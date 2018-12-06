import React, { Component } from 'react';
import PropTypes from 'prop-types'

import "./styles/Track.css";


class Track extends Component {

  constructor(props) {
    super(props);
      this.state = {
          favorite: false,
          side: props.side,
        };
  }



  onUpClicked = () => {
    this.props.sortTracksCallback(this)
  }

  onSwitchSidesClick = () => {
    this.props.switchPlayListCallback(this)
  }

  render(props) {
    // Here we use destructuring to extract the props into separate variables
    // See https://wesbos.com/destructuring-objects/
      // onChange={this.onChangeFavorite}
      return (
        <li className="track">
          <img className="track--albumart" alt={`album art for ${this.props.title}`} src={this.props.albumart} />
          <h3 className="track--title">{this.props.title}</h3>
          <input
            type="checkbox"
            className="track--favorite"
            checked={this.props.favorite}
            defaultChecked={!this.state.favorite}
          />
          <p className="track--artist">{this.props.artist}</p>
          <p className="track--playtime">{this.props.playtime}</p>
          <button
            className="track--control track--to-top"
            >
            <span role="img" aria-label="send to top" onClick={ this.onUpClicked }>🔝</span>
          </button>
          <button
            className="track--control track--switch"
            >
            <span role="img" aria-label="switch lists" onClick={ this.onSwitchSidesClick }>↔</span>
          </button>
        </li>
      );
    };


  }

  Track.propTypes = {
    title: PropTypes.string,
    artist: PropTypes.string,
    playtime: PropTypes.string,
    albumart: PropTypes.string,
    favorite: PropTypes.bool,
  }


export default Track;
