import React from 'react';
import PropTypes from 'prop-types';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) =>  {

  //
  // const morningTracks = props.tracks.morningTracks
  // const eveningTracks = props.tracks.eveningTracks

  // console.log(`Radio set for ${this.props.tracks.length} tracks`);
  // const playlists = {
  // morningTracks: props.tracks.slice(0, props.tracks.length / 2),
  // eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
  // };

  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={props.morningTracks}
          radioMarkFavoritedCallback={props.appMarkFavoritedCallback}
          radioToTopCallback={props.appToTopCallback}

          />
        <Playlist
          side="Evening"
          tracks={props.eveningTracks}
          radioMarkFavoritedCallback={props.appMarkFavoritedCallback}
          radioToTopCallback={props.appToTopCallback}
          />
      </section>
    </div>
  );
};

RadioSet.propTypes = {
  morningTracks: PropTypes.array,
  eveningTracks: PropTypes.array,
}

export default RadioSet;
