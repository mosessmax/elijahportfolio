/// <reference types="node" />

import { useEffect, useState } from 'react';
import querystring from 'querystring';
import { Buffer } from 'buffer';
import { WifiSlash, WarningCircle, PauseCircle } from '@phosphor-icons/react'
import './SpotifyNowPlaying.css';

// Setting up the Spotify API and Endpoints
const NOW_PLAYING_ENDPOINT = import.meta.env.VITE_APP_NOW_PLAYING_ENDPOINT || 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = import.meta.env.VITE_APP_TOKEN_ENDPOINT || 'https://accounts.spotify.com/api/token';
const client_id = import.meta.env.VITE_APP_CLIENT_ID;
const client_secret = import.meta.env.VITE_APP_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_APP_REFRESH_TOKEN;


// Function to generate an access token using the refresh token every time the website is opened or refreshed
export const getAccessToken = async (client_id: string, client_secret: string, refresh_token: string) => {
  // Creates a base64 code of client_id:client_secret as required by the API
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  // The response will contain the access token
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

// Uses the access token to fetch the currently playing song
export const getNowPlaying = async () => {
  try {
    // Generating an access token
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

    // Fetching the response
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // If response status > 400 means there was some error while fetching the required information
    if (response.status > 400) {
      throw new Error('Unable to Fetch Song');
    } else if (response.status === 204) {
      // The response was fetched but there was no content
      throw new Error('Currently Not Playing');
    }

    // Extracting the required data from the response into separate variables
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((artist: any) => artist.name).join(', ');
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    // Returning the song details
    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    };
  } catch (error) {
    console.error('Error fetching currently playing song: ', error);
    return (error as Error).message.toString();
  }
};

// Main function to process the data and render the widget
const NowPlaying = () => {
  // Hold information about the currently playing song
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [nowPlaying, setNowPlaying] = useState<any>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data);
    };

    // The Spotify API does not support web sockets, so in order to keep updating the currently playing song and time elapsed - we call the API every second
    const interval = setInterval(() => {
      fetchNowPlaying();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Setting default values for the listener's current state and the duration of the song played
  let playerState = '';
  let secondsPlayed = 0,
    minutesPlayed = 0,
    secondsTotal = 0,
    minutesTotal = 0;
  let albumImageUrl = './images/albumCover.png';
  let title = '';
  let artist = '';

  if (nowPlaying != null && nowPlaying.title) {
    // nowPlaying.isPlaying ? (playerState = 'PLAY') : (playerState = 'PAUSE');

    if (nowPlaying.isPlaying) {
      playerState = 'PLAY';
    } else {
      playerState = 'PAUSE';
    }

    // Converting the playback duration from seconds to minutes and seconds
    secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
    minutesPlayed = Math.floor(secondsPlayed / 60);
    secondsPlayed = secondsPlayed % 60;

    // Converting the song duration from seconds to minutes and seconds
    secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
    minutesTotal = Math.floor(secondsTotal / 60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl;
    title = nowPlaying.title;
    artist = nowPlaying.artist;
  } else if (nowPlaying === 'Currently Not Playing') {
    // If the response returns this error message then we print the following text in the widget
    playerState = 'OFFLINE';
    title = 'elijah is';
    artist = 'currently offline';
    albumImageUrl = '/sad.png';
  } else {
    // If the response wasn't able to fetch anything then we display this
    title = 'Failed to';
    artist = 'fetch song';
  }

  // Used to set 0 as padding when the it is a single digit number
  const pad = (n: number) => {
    return n < 10 ? '0' + n : n;
  };

  return (
    // Depending on the value of playerState, the href, album image, and icons are updated
    <a style={{ textDecoration: 'none', color: 'black' }} href={playerState === 'PLAY' || playerState === 'PAUSE' ? nowPlaying.songUrl : ''}>
      <div className='nowPlayingCard'>
        {/* Album image and href displayed based on playerState */}
        <div className='nowPlayingImage'>
          {playerState === 'PLAY' || playerState === 'PAUSE' ? (
            <a href={nowPlaying.songUrl}>
              <img src={albumImageUrl} alt='Album' />
            </a>
          ) : (
            <img src={albumImageUrl} alt='Album' />
          )}
        </div>
        <div id='nowPlayingDetails'>
          {/* Song Title displayed based on playerState */}
          <div className={`nowPlayingTitle ${title.length > 15 ? 'marquee-content' : ' '}`}>
            {playerState === 'PLAY' || playerState === 'PAUSE' ? (
              <a href={nowPlaying.songUrl}>{title}</a>
            ) : (
              title
            )}
          </div>
          {/* Artist displayed based on playerState */}
          <div className='nowPlayingArtist'>
            {playerState === 'PLAY' || playerState === 'PAUSE' ? (
              <a href={nowPlaying.artistUrl}>{artist}</a>
            ) : (
              artist
            )}
          </div>
          {/* Song Timer displayed based on playerState */}
          <div className='nowPlayingTime'>
            {pad(minutesPlayed)}:{pad(secondsPlayed)} / {pad(minutesTotal)}:{pad(secondsTotal)}
          </div>
        </div>
        {/* Icon displayed based on playerState */}
        <div className='nowPlayingState'>
          {playerState === 'PLAY' ? (
            <img alt='soundbar' src='/sound.gif' title='Now Listening' />
          ) : playerState === 'PAUSE' ? (
            <PauseCircle size={32} />
          ) : playerState === 'OFFLINE' ? (
            <WifiSlash size={32} />
          ) : (
            <WarningCircle size={32} />
          )}
        </div>
      </div>
    </a>
  );
};

export default NowPlaying;