import React from 'react';
import "./styles/RadioSet.css";
import PropTypes from 'prop-types'

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);

  let playlists = {
    morningTracks: props.tracks.slice(0, props.leftTrekCount),
    eveningTracks: props.tracks.slice(props.leftTrekCount, props.tracks.length)
  };


  const radioTopRight =(index)=>{

    props.appCallback(index + playlists.morningTracks.length);

  };

  const radioTopLeft =(index)=>{

    props.appCallback(index);

  };

  const radioSwitchRight =(index)=>{

    props.appSwitchCallback(index);
  };

  const radioSwitchLeft =(index)=>{

    props.appSwitchCallback(index + playlists.morningTracks.length);
  };


  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={playlists.morningTracks}
          topCallback={radioTopLeft}
          radioSwitchCallback={radioSwitchRight}
        />
        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
          topCallback={radioTopRight}
          radioSwitchCallback={radioSwitchLeft}
        />
      </section>
    </div>
  );
};

RadioSet.propTypes = {
  tracks: PropTypes.array,
  
}

export default RadioSet;
