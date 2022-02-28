import { Component, OnInit, AfterViewInit } from '@angular/core';

const WaveSurfer = require('wavesurfer.js');

export interface Song {
  name: string;
  artist: string;
  duration: number;
  tags: Array<string>;
  isLiked: boolean;
  play: Function;
  isPlaying: boolean;
  pause: Function;
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements AfterViewInit, OnInit {

  url =
    'https://ia800508.us.archive.org/15/items/LoveThemeFromTheGodfather/02LoveThemeFromTheGodfather.mp3';

  songsList: Song[] = [
    {
      name: 'Stringed',
      artist: 'Shlok',
      duration: 180,
      tags: ['Trap', 'Groovy', 'Chill'],
      isLiked: false,
      play: () => {},
      pause: () => {},
      isPlaying: false,
    },
    {
      name: 'Horntrap',
      artist: 'Shlok',
      duration: 180,
      tags: ['Energetic', 'Action'],
      isLiked: false,
      play: () => {},
      pause: () => {},
      isPlaying: false,
    },
    {
      name: 'Beast',
      artist: 'Nasty Ninja',
      duration: 180,
      tags: ['Desi', 'Badass', 'Beat'],
      isLiked: false,
      play: () => {},
      pause: () => {},
      isPlaying: false,
    },
    {
      name: 'R',
      artist: 'Shlok',
      duration: 180,
      tags: ['Trap', 'Groovy', 'Chill'],
      isLiked: false,
      play: () => {},
      pause: () => {},
      isPlaying: false,
    },
    {
      name: 'ABC',
      artist: 'Shlok',
      duration: 180,
      tags: ['Trap', 'Groovy', 'Chill'],
      isLiked: false,
      play: () => {},
      pause: () => {},
      isPlaying: false,
    },
    {
      name: 'GoGoGo',
      artist: 'Shlok',
      duration: 180,
      tags: ['Trap', 'Groovy', 'Chill'],
      isLiked: false,
      play: () => {},
      pause: () => {},
      isPlaying: false,
    },
  ];

  filtersList: String[] = [
    'Mood',
    'Genre',
    'Sub Genre',
    'Vocals',
    'Temp',
    'Length',
    'All Filters',
  ]

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.generateWaveform();
  }

  generateWaveform(): void {
    // for each of the songs, generate it's seperate waveform
    for (let e of this.songsList) {
      const wavesurfer = WaveSurfer.create({
        container: '.' + e.name,
        barWidth: 3,
        waveColor: '#CCC',
        progressColor: 'white',
        backend: 'MediaElement',
        mediaType: 'audio',
        height: 80,
        cursorColor: 'white',
        responsive: true,
        hideScrollbar: true,
      });

      wavesurfer.load(this.url);
      e.play = function () {
        wavesurfer.play();
        e.isPlaying = true;
      };

      e.pause = function () {
        wavesurfer.pause();
        e.isPlaying = false;
      };

    }
  }
}
