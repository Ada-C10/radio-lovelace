

import React, { Component } from 'react';

import "./styles/RadioSet.css";
import PropTypes from 'prop-types'

import Playlist from './Playlist';


class RadioSet extends Component {
  constructor(props) {
    super();

    this.state = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    }

  }


  radioTopLeft =(index)=>{
    let updatedMorningTracks = this.state.morningTracks;
    let temp = updatedMorningTracks.splice(index,1)[0];

    updatedMorningTracks.unshift(temp);

    this.setState({morningTracks: updatedMorningTracks});

  };

  radioTopRight =(index)=>{
    let updatedEveningTracks = this.state.eveningTracks;
    let temp = updatedEveningTracks.splice(index,1)[0];
    updatedEveningTracks.unshift(temp);
    this.setState({eveningTracks: updatedEveningTracks});

  };


  radioSwitchRight =(index)=>{
    let updatedMorningTracks = this.state.morningTracks;
    let updatedEveningTracks = this.state.eveningTracks;

    let temp = updatedMorningTracks.splice(index,1)[0];

    updatedEveningTracks.unshift(temp);

    this.setState({morningTracks: updatedMorningTracks, eveningTracks: updatedEveningTracks});

  };

  radioSwitchLeft =(index)=>{
    let updatedMorningTracks = this.state.morningTracks;
    let updatedEveningTracks = this.state.eveningTracks;

    let temp = updatedEveningTracks.splice(index,1)[0];

    updatedMorningTracks.unshift(temp);

    this.setState({morningTracks: updatedMorningTracks, eveningTracks: updatedEveningTracks});

  };

  radioFavoriteLeft =(index)=>{
     const newState = {...this.state};
     const playlistTracks = [...newState["morningTracks"]];
     const track = {...playlistTracks[index]};

     track.favorite = !track.favorite;

     playlistTracks[index] = track;
     newState["morningTracks"] = playlistTracks;
     this.setState(newState);

  };

  radioFavoriteRight =(index)=>{
     const newState = {...this.state};
     const playlistTracks = [...newState["eveningTracks"]];
     const track = {...playlistTracks[index]};

     track.favorite = !track.favorite;

     playlistTracks[index] = track;
     newState["eveningTracks"] = playlistTracks;
     this.setState(newState);

  };


  render() {
    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.morningTracks}
            topCallback={this.radioTopLeft}
            radioSwitchCallback={this.radioSwitchRight}
            radioFavoriteCallback={this.radioFavoriteLeft}
          />
          <Playlist
            side="Evening"
            tracks={this.state.eveningTracks}
            topCallback={this.radioTopRight}
            radioSwitchCallback={this.radioSwitchLeft}
            radioFavoriteCallback={this.radioFavoriteRight}
          />
        </section>
      </div>
    );
  }
};

RadioSet.propTypes = {
  tracks: PropTypes.array,

}

export default RadioSet;
