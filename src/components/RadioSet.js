import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
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
          topTrackCallback = {props.topTrackCallback}
        />
        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
          topTrackCallback = {props.topTrackCallback}
        />
      </section>
    </div>
  );
};

export default RadioSet;
