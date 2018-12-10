import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(props);
  console.log(`Radio set for ${props.tracks.length} tracks`);
  const playlists = {
    morningTracks: props.morningTracks,
    eveningTracks: props.eveningTracks,
  };
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={playlists.morningTracks}
          handleFavoriteCallback={props.handleFavoriteCallback}
          handleTopCallback={props.handleTopCallback}
          handleSwitchCallback={props.handleSwitchCallback}
        />

        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
          handleFavoriteCallback={props.handleFavoriteCallback}
          handleTopCallback={props.handleTopCallback}
          handleSwitchCallback={props.handleSwitchCallback}
        />

      </section>
    </div>
  );
};

export default RadioSet;