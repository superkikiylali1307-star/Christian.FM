import { useState, useCallback } from 'react';
import { PlayerContext } from './PlayerContext';

export default function PlayerProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    title: 'Welcome to Christian.FM',
    artist: 'Select a station to begin',
    album: 'Christian.FM',
    duration: 240,
  });
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState('off');
  const [isLiked, setIsLiked] = useState(false);
  const [activeStation, setActiveStation] = useState(null);

  const togglePlay = useCallback(() => setIsPlaying(prev => !prev), []);
  const toggleShuffle = useCallback(() => setIsShuffle(prev => !prev), []);
  const toggleLike = useCallback(() => setIsLiked(prev => !prev), []);

  const cycleRepeat = useCallback(() => {
    setRepeatMode(prev => {
      if (prev === 'off') return 'all';
      if (prev === 'all') return 'one';
      return 'off';
    });
  }, []);

  const playStation = useCallback((station) => {
    setActiveStation(station);
    setCurrentTrack({
      title: station.name,
      artist: 'Live Radio',
      album: 'Christian.FM',
      duration: 0,
    });
    setIsPlaying(true);
    setProgress(0);
  }, []);

  const value = {
    isPlaying,
    currentTrack,
    progress,
    volume,
    isShuffle,
    repeatMode,
    isLiked,
    activeStation,
    togglePlay,
    toggleShuffle,
    toggleLike,
    cycleRepeat,
    setProgress,
    setVolume,
    playStation,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}
