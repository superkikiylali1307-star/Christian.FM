import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  Heart,
  Volume2,
  VolumeX,
  ListMusic,
  Maximize2,
  Music2,
} from 'lucide-react';
import { usePlayer } from '../hooks/usePlayer';

function formatTime(seconds) {
  if (!seconds || seconds <= 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function Player() {
  const {
    isPlaying,
    currentTrack,
    progress,
    volume,
    isShuffle,
    repeatMode,
    isLiked,
    togglePlay,
    toggleShuffle,
    toggleLike,
    cycleRepeat,
    setProgress,
    setVolume,
  } = usePlayer();

  const progressPercent = currentTrack.duration > 0
    ? (progress / currentTrack.duration) * 100
    : 0;

  return (
    <div className="h-[88px] bg-surface-900/95 backdrop-blur-xl border-t border-white/5 flex items-center px-4 gap-4 z-50">
      {/* Track Info */}
      <div className="flex items-center gap-3 w-[280px] min-w-[200px]">
        <div className={`
          w-14 h-14 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400
          flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-900/30
          ${isPlaying ? 'animate-pulse' : ''}
        `}>
          <Music2 size={24} className="text-white/90" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white truncate">{currentTrack.title}</p>
          <p className="text-xs text-white/40 truncate">{currentTrack.artist}</p>
        </div>
        <button
          onClick={toggleLike}
          className={`ml-1 flex-shrink-0 transition-colors ${isLiked ? 'text-red-400' : 'text-white/30 hover:text-white/60'}`}
        >
          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Center Controls */}
      <div className="flex-1 flex flex-col items-center max-w-[600px] mx-auto">
        <div className="flex items-center gap-5 mb-2">
          <button
            onClick={toggleShuffle}
            className={`transition-colors ${isShuffle ? 'text-brand-400' : 'text-white/30 hover:text-white/60'}`}
          >
            <Shuffle size={16} />
          </button>
          <button className="text-white/50 hover:text-white transition-colors">
            <SkipBack size={20} fill="currentColor" />
          </button>
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg"
          >
            {isPlaying
              ? <Pause size={20} className="text-surface-950" fill="currentColor" />
              : <Play size={20} className="text-surface-950 ml-0.5" fill="currentColor" />
            }
          </button>
          <button className="text-white/50 hover:text-white transition-colors">
            <SkipForward size={20} fill="currentColor" />
          </button>
          <button
            onClick={cycleRepeat}
            className={`transition-colors ${repeatMode !== 'off' ? 'text-brand-400' : 'text-white/30 hover:text-white/60'}`}
          >
            {repeatMode === 'one' ? <Repeat1 size={16} /> : <Repeat size={16} />}
          </button>
        </div>

        <div className="w-full flex items-center gap-2">
          <span className="text-[10px] text-white/30 w-10 text-right tabular-nums">
            {formatTime(progress)}
          </span>
          <div className="flex-1 relative group">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <input
              type="range"
              min="0"
              max={currentTrack.duration || 100}
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer"
            />
          </div>
          <span className="text-[10px] text-white/30 w-10 tabular-nums">
            {formatTime(currentTrack.duration)}
          </span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 w-[200px] justify-end">
        <button className="text-white/30 hover:text-white/60 transition-colors">
          <ListMusic size={18} />
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setVolume(volume > 0 ? 0 : 75)}
            className="text-white/30 hover:text-white/60 transition-colors"
          >
            {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <div className="w-24 relative group">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/50 rounded-full"
                style={{ width: `${volume}%` }}
              />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <button className="text-white/30 hover:text-white/60 transition-colors">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
}
