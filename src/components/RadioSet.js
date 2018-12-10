import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(props);
  console.log(`Radio set for ${props.tracks.length} tracks`);
  const playlists = {
    // divide am and pm playlist am = slice index 0 to first half of list
      //pm setlist is from second half to full length of track list
    morningTracks: props.tracks.slice(0, props.tracks.length/2),
    eveningTracks: props.tracks.slice(props.tracks.length/2, props.tracks.length),
    // morningTracks: props.tracks.morningTracks,
    // eveningTracks: props.tracks.eveningTracks,

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