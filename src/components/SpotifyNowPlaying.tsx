/// <reference types="node" />

import { useEffect, useState } from 'react';
import querystring from 'querystring';
import { Buffer } from 'buffer';
import { WifiSlash, WarningCircle, PauseCircle } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

const NOW_PLAYING_ENDPOINT = import.meta.env.VITE_APP_NOW_PLAYING_ENDPOINT || 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = import.meta.env.VITE_APP_TOKEN_ENDPOINT || 'https://accounts.spotify.com/api/token';
const client_id = import.meta.env.VITE_APP_CLIENT_ID;
const client_secret = import.meta.env.VITE_APP_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_APP_REFRESH_TOKEN;

export const getAccessToken = async (client_id: string, client_secret: string, refresh_token: string) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

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

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song');
    } else if (response.status === 204) {
      throw new Error('Currently Not Playing');
    }

    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((artist: any) => artist.name).join(', ');
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

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

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<any>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data);
    };

    const interval = setInterval(() => {
      fetchNowPlaying();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let playerState = '';
  let secondsPlayed = 0,
    minutesPlayed = 0,
    secondsTotal = 0,
    minutesTotal = 0;
  let albumImageUrl = './images/albumCover.png';
  let title = '';
  let artist = '';

  if (nowPlaying != null && nowPlaying.title) {
    if (nowPlaying.isPlaying) {
      playerState = 'PLAY';
    } else {
      playerState = 'PAUSE';
    }

    secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
    minutesPlayed = Math.floor(secondsPlayed / 60);
    secondsPlayed = secondsPlayed % 60;

    secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
    minutesTotal = Math.floor(secondsTotal / 60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl;
    title = nowPlaying.title;
    artist = nowPlaying.artist;
  } else if (nowPlaying === 'Currently Not Playing') {
    playerState = 'OFFLINE';
    title = 'elijah is';
    artist = 'currently offline';
    albumImageUrl = '/sad.png';
  } else {
    title = 'Failed to';
    artist = 'fetch song';
  }

  const pad = (n: number) => {
    return n < 10 ? '0' + n : n;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors hover:shadow-sm"
    >
      <div className="flex items-center gap-3">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="w-12 h-12 rounded overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0 relative group"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={albumImageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {playerState === 'PLAY' || playerState === 'PAUSE' ? (
                <a href={nowPlaying.songUrl} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={albumImageUrl} 
                    alt="Album cover" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ) : (
                <img 
                  src={albumImageUrl} 
                  alt="Album cover" 
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle play indicator overlay */}
          {playerState === 'PLAY' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/10 flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full opacity-60"
              />
            </motion.div>
          )}
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <AnimatePresence mode="wait">
              <motion.span 
                key={playerState}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide"
              >
                {playerState === 'PLAY' ? 'Now playing' : playerState === 'PAUSE' ? 'Paused' : playerState === 'OFFLINE' ? 'Offline' : 'No music'}
              </motion.span>
            </AnimatePresence>
            
            <div className="flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={playerState}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {playerState === 'PLAY' ? (
                    <div className="flex space-x-1">
                      {[3, 2, 4].map((height, index) => (
                        <motion.div
                          key={index}
                          className="bg-green-500 rounded-full"
                          style={{ width: '3px', height: `${height * 3}px` }}
                          animate={{ 
                            scaleY: [0.5, 1, 0.5],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 1.2,
                            repeat: Infinity,
                            delay: index * 0.1
                          }}
                        />
                      ))}
                    </div>
                  ) : playerState === 'PAUSE' ? (
                    <PauseCircle size={16} className="text-gray-400" />
                  ) : playerState === 'OFFLINE' ? (
                    <WifiSlash size={16} className="text-gray-400" />
                  ) : (
                    <WarningCircle size={16} className="text-gray-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="space-y-1">
            <AnimatePresence mode="wait">
              <motion.div 
                key={title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className={`font-medium text-gray-900 dark:text-white text-sm ${title.length > 25 ? 'truncate' : ''}`}
              >
                {playerState === 'PLAY' || playerState === 'PAUSE' ? (
                  <motion.a 
                    href={nowPlaying.songUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="hover:underline"
                  >
                    {title}
                  </motion.a>
                ) : (
                  title
                )}
              </motion.div>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={artist}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-sm text-gray-600 dark:text-gray-400 truncate"
              >
                {playerState === 'PLAY' || playerState === 'PAUSE' ? (
                  <motion.a 
                    href={nowPlaying.artistUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="hover:underline"
                  >
                    {artist}
                  </motion.a>
                ) : (
                  artist
                )}
              </motion.div>
            </AnimatePresence>

            {(playerState === 'PLAY' || playerState === 'PAUSE') && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center gap-2 pt-1"
              >
                <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                  {pad(minutesPlayed)}:{pad(secondsPlayed)}
                </span>
                <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gray-900 dark:bg-gray-100 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${(nowPlaying.timePlayed / nowPlaying.timeTotal) * 100}%` 
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                  {pad(minutesTotal)}:{pad(secondsTotal)}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NowPlaying;