import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component {
  // console.log(`Radio set for ${props.tracks.length} tracks`);
  constructor(props) {
    super(props)
    this.state = {
      playlists:  {
        morningTracks: props.tracks.slice(0, props.tracks.length / 2),
        eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
      }
    }
  }

  switchLists = () => {
    console.log("switch list");
  };

  render () {

    const playlists = this.state.playlists;



    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
            markFavoriteCallback={this.props.markFavoriteCallback}
            switchListsCallback={this.switchLists}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
            markFavoriteCallback={this.props.markFavoriteCallback}
            switchListsCallback={this.switchLists}
          />
        </section>
      </div>
    );
  }
};

export default RadioSet;
