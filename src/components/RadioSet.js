import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
      console.log();
  const playlists = {

    morningTracks: props.tracks.slice(0, props.tracks.length / 2),
    eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
  };
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={playlists.morningTracks}
          markFavoriteCallback={props.markFavoriteCallback}
          toTopCallback={props.toTopCallback}
          switchPlaylistsCallback={props.switchPlaylistsCallback}
        />
        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
          markFavoriteCallback={props.markFavoriteCallback}
          toTopCallback={props.toTopCallback}
          switchPlaylistsCallback={props.switchPlaylistsCallback}
        />
      </section>
    </div>
  );
};

export default RadioSet;
