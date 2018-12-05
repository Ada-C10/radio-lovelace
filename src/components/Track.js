import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/

// takes keys from json and turns into variables passed into Track
// const Track = ({title, artist, playtime, albumart, favorite}) => {
class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };

    this.clickFavoriteButton = this.clickFavoriteButton.bind(this);
  }

//Change favorite to act on id not index?
  clickFavoriteButton = () => {
    // console.log(this.state.favorite);
    console.log(`${this.props.title} star clicked`);
    this.props.isFavorite(this.props.index);
    this.setState({favorite: !this.state.favorite});
    // prop and state favorite redundant or possiblility for bug? delete?
  }

  clickTopButton = () => {
    console.log(`Track ${this.props.index} -  ${this.props.title} voted to top of track list`);
    this.props.topvote(this.props.index);
  }

  clickMoveArrow = () => {
    console.log(`Arrow clicked to move track to other list`);
    this.props.switchPlaylistCallback();
  }

  render() {
    return (
      <li className="track">
        <img className="track--albumart" alt={`album art for ${this.props.title}`} src={this.props.albumart} />
        <h3 className="track--title">{this.props.title}</h3>
        <input
          type="checkbox"
          className="track--favorite"
          checked={!this.state.favorite}
          onChange={this.clickFavoriteButton}
        />
        <p className="track--artist">{this.props.artist}</p>
        <p className="track--playtime">{this.props.playtime}</p>
        <button
          className="track--control track--to-top"
          onClick={this.clickTopButton}
          >
          <span role="img" aria-label="send to top">🔝</span>
        </button>
        <button
          className="track--control track--switch"
          onClick={this.clickMoveArrow}
          >
          <span role="img" aria-label="switch lists">↔</span>
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

// Track.defaultProps = {
//   favorite: false,
// }

export default Track;
