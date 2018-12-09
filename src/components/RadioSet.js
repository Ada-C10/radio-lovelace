import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
  const playlists = {
    morningTracks: props.tracks.slice(0, props.morningTrackCount),
    eveningTracks: props.tracks.slice(props.morningTrackCount, props.tracks.length)
  };
  
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={playlists.morningTracks}
          changeFavoriteCallback={props.changeFavoriteCallback}
          moveToTopCallback={props.moveToTopCallback}
          changePlayListCallback={props.changePlayListCallback}
        />
        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
          changeFavoriteCallback={props.changeFavoriteCallback}
          moveToTopCallback={props.moveToTopCallback}
          changePlayListCallback={props.changePlayListCallback}
        />
      </section>
    </div>
  );
};

export default RadioSet;
