import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/
// class Track extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       title: props.title,
//       artist: props.artist,
//       playtime: props.playtime,
//       albumart: props.albumart,
//       favorite: false
//     };
//   };
//
//   changeFavorite = () => {
//     console.log("I am hereryzf");
//     this.setState({
//       favorite: !this.state.favorite
//     });
//   };
const Track = ({id, title, artist, playtime, albumart, favorite, changeFavoriteCallback}) => {

  // render() {
    // changeFavorite = () => {
    //   console.log("I am hereryzf");
    //   this.setState({
    //     favorite: !this.state.favorite
    //   });
    // };

    // console.log(changeFavorite);
    // console.log(props.changeFav);
    // console.log(id);
    // console.log(favorite);
    const changeFavoriteChild = () => {
      changeFavoriteCallback(id)
    }

    return (
      <li className="track">
        <img className="track--albumart" alt={`album art for ${title}`} src={albumart} />
        <h3 className="track--title">{title}</h3>
        <input
          type="checkbox"
          className="track--favorite"
          checked={!favorite}
          onChange={changeFavoriteChild}
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
  };
// };

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
}

export default Track;
