import { usePlayer } from '../hooks/PlayerContext';
import { Music2, Radio } from 'lucide-react';

export default function NowPlayingBar() {
  const { activeStation, isPlaying } = usePlayer();

  if (!activeStation) return null;

  return (
    <div className="mb-6">
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${activeStation.gradient} p-6`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute -left-4 -bottom-4 w-32 h-32 rounded-full bg-white/5 blur-2xl" />

        <div className="relative flex items-center gap-5">
          <div className={`
            w-16 h-16 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center
            ${isPlaying ? 'animate-pulse' : ''}
          `}>
            <Radio size={28} className="text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-0.5">Now Playing</p>
            <h3 className="text-xl font-bold text-white truncate">{activeStation.name}</h3>
            <p className="text-sm text-white/60 truncate">{activeStation.description}</p>
          </div>

          {isPlaying && (
            <div className="flex items-end gap-1 h-8 mr-2">
              <div className="w-1 bg-white/70 rounded-full animate-[equalize_0.8s_ease-in-out_infinite]" style={{ height: '60%' }} />
              <div className="w-1 bg-white/70 rounded-full animate-[equalize_0.8s_ease-in-out_infinite_0.2s]" style={{ height: '100%' }} />
              <div className="w-1 bg-white/70 rounded-full animate-[equalize_0.8s_ease-in-out_infinite_0.4s]" style={{ height: '40%' }} />
              <div className="w-1 bg-white/70 rounded-full animate-[equalize_0.8s_ease-in-out_infinite_0.6s]" style={{ height: '80%' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
