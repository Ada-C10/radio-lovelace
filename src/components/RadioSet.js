import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
  
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={props.playlists.morningTracks}
          favorite={props.favorite}
          clickFavoriteCallback={props.clickFavoriteCallback}
          moveTrackUpCallback={props.moveTrackUpCallback}
        />
        <Playlist
          side="Evening"
          tracks={props.playlists.eveningTracks}
          favorite={props.favorite}
          clickFavoriteCallback={props.clickFavoriteCallback}
          moveTrackUpCallback={props.moveTrackUpCallback}
        />
      </section>
    </div>
  );
};

export default RadioSet;
