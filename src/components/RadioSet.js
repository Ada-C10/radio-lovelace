import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks,
    }
  };

  findSongIndex = (songList, songId) => {
    return songList.findIndex(song => song.id === songId)
  };

  markFavorite = (songId) => {
    const newTracks = this.state.tracks;
    const songIndex = this.findSongIndex(newTracks, songId);
    newTracks[songIndex].favorite = true;

    this.setState({tracks: newTracks});
  };

  sendToTop = (songId) => {
    const newTracks = this.state.tracks;
    const songIndex = this.findSongIndex(newTracks, songId);
    const playlistLength = this.state.tracks.length / 2;
    const songToMove = newTracks.splice(songIndex, 1)[0];

    if (songToMove.id < playlistLength) {
      newTracks.unshift(songToMove);
    } else {
      newTracks.splice(playlistLength, 0, songToMove)
    }

    this.setState({tracks: newTracks});
  };

  render () {
    const playlists = {
      morningTracks: this.state.tracks.slice(0, this.state.tracks.length / 2),
      eveningTracks: this.state.tracks.slice(this.state.tracks.length / 2, this.state.tracks.length)
    };

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
            markFavoriteCallback={this.markFavorite}
            toTopCallback={this.sendToTop}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
            markFavoriteCallback={this.markFavorite}
            toTopCallback={this.sendToTop}
          />
        </section>
      </div>
    );
  };
};

export default RadioSet;
