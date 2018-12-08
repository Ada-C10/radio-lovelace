import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks,
      morningPlaylistLength: this.props.tracks.length / 2
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
    // const playlistLength = this.state.tracks.length / 2;
    const songToMove = newTracks.splice(songIndex, 1)[0];

    if (songIndex < this.state.morningPlaylistLength) {
      newTracks.unshift(songToMove);
    } else {
      newTracks.splice(this.state.morningPlaylistLength, 0, songToMove);
    }

    this.setState({tracks: newTracks});
  };

  switchLists = (songId) => {
    const newTracks = this.state.tracks;
    const songIndex = this.findSongIndex(newTracks, songId);
    // const playlistLength = this.state.tracks.length / 2;
    const songToMove = newTracks.splice(songIndex, 1)[0];

    if (songIndex < this.state.morningPlaylistLength) { // move to evening
      this.setState({morningPlaylistLength: this.state.morningPlaylistLength - 1});      newTracks.splice(this.state.morningPlaylistLength - 1, 0, songToMove);
    } else { // move to morning
      this.setState({morningPlaylistLength: this.state.morningPlaylistLength + 1});
      newTracks.unshift(songToMove);
    }

    this.setState({tracks: newTracks});
  }

  render () {
    const playlists = {
      morningTracks: this.state.tracks.slice(0, this.state.morningPlaylistLength),
      eveningTracks: this.state.tracks.slice(this.state.morningPlaylistLength, this.state.tracks.length)
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
