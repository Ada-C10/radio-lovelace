import React, { Component } from 'react';
import PropTypes from 'prop-types'

import "./styles/Track.css";


class Track extends Component {

  constructor(props) {
    super(props);

      this.state = {
          favorite: props.favorite
        };
  }


  onUpClicked = () => {
    this.props.sortTracksCallback(this)
  }

  onSwitchSidesClicked = () => {
    this.props.switchPlayListCallback(this, this.state.favorite)
  }

  onFavStar = () => {
    if (this.state.favorite === false) {
      this.setState({favorite: true})
    } else {
      this.setState({favorite: false})
    }
  }

  render(props) {
      return (
        <li className="track">
          <img className="track--albumart" alt={`album art for ${this.props.title}`} src={this.props.albumart} />
          <h3 className="track--title">{this.props.title}</h3>
          <input
            type="checkbox"
            className="track--favorite"
            checked={!this.state.favorite}
            onChange={this.onFavStar}
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
            <span role="img" aria-label="switch lists" onClick={ this.onSwitchSidesClicked }>↔</span>
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
