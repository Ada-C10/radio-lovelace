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
    newTracks[songIndex].favorite = !newTracks[songIndex].favorite;

    this.setState({tracks: newTracks});
  };

  sendToTop = (songId) => {
    const newTracks = this.state.tracks;
    const songIndex = this.findSongIndex(newTracks, songId);
    const playlistLength = this.state.tracks.length / 2;
    const songToMove = newTracks.splice(songIndex, 1)[0];

    if (songIndex < playlistLength) {
      newTracks.unshift(songToMove);
    } else {
      newTracks.splice(playlistLength, 0, songToMove);
    }

    this.setState({tracks: newTracks});
  };

  switchLists = (songId) => {
    const newTracks = this.state.tracks;
    const songIndex = this.findSongIndex(newTracks, songId);
    const playlistLength = this.state.tracks.length / 2;
    const songToMove = newTracks.splice(songIndex, 1)[0];

    if (songIndex < playlistLength) {
      newTracks.splice(playlistLength, 0, songToMove); // move right
    } else {
      newTracks.unshift(songToMove); // move left
    }

    this.setState({tracks: newTracks});
  }

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
            switchListsCallback={this.switchLists}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
            markFavoriteCallback={this.markFavorite}
            toTopCallback={this.sendToTop}
            switchListsCallback={this.switchLists}
          />
        </section>
      </div>
    );
  };
};

export default RadioSet;
