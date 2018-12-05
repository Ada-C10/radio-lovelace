import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
  // playlists is an object with --
  // morningTracks: first sliced half of tracks list &
  // eveningTracks: second sliced half of tracks list
  const playlists = {
    morningTracks: props.tracks.slice(0, props.tracks.length / 2),
    eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
  };

  const playlistSwitch = {

  };


  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        {/* When change song, must change side prop and list in const playlists? No. Track does not have side. Playlist does. For song, only move between playlists.morningTracks and playlists.eveningTracks*/}
        <Playlist
          side="Morning"
          tracks={playlists.morningTracks}
        />
        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
          moveTrack={this.playlistSwitch}
        />
      </section>
    </div>
  );
};

export default RadioSet;
