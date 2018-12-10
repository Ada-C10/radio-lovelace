import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {

  song.id = i;
  song.favorite = false;
  if (song.id < songData.length/2) {
    song.playlist = "Morning"
  }
  else {
    song.playlist = "Evening"
  }
});

class App extends Component {
  constructor() {
    super()
    console.log(this.state)
    this.state = {
      songData,
    }
    console.log(songData);
  }
