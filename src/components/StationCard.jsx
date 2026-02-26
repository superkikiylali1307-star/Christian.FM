import { Play, Radio, Users } from 'lucide-react';
import { usePlayer } from '../hooks/PlayerContext';

export default function StationCard({ station }) {
  const { playStation, activeStation, isPlaying } = usePlayer();
  const isActive = activeStation?.id === station.id;

  return (
    <button
      onClick={() => playStation(station)}
      className="group relative rounded-2xl overflow-hidden text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${station.gradient} opacity-90`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {isActive && isPlaying && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-md rounded-full px-2.5 py-1">
          <div className="flex items-end gap-0.5 h-3">
            <div className="w-0.5 bg-white rounded-full animate-[bounce_0.6s_ease-in-out_infinite]" style={{ height: '8px' }} />
            <div className="w-0.5 bg-white rounded-full animate-[bounce_0.6s_ease-in-out_infinite_0.15s]" style={{ height: '12px' }} />
            <div className="w-0.5 bg-white rounded-full animate-[bounce_0.6s_ease-in-out_infinite_0.3s]" style={{ height: '6px' }} />
          </div>
          <span className="text-[10px] font-medium text-white">LIVE</span>
        </div>
      )}

      <div className="relative p-5 h-[180px] flex flex-col justify-between">
        <div>
          <span className="text-3xl mb-2 block">{station.icon}</span>
          <h3 className="text-lg font-bold text-white leading-tight">{station.name}</h3>
          <p className="text-xs text-white/60 mt-1 line-clamp-2">{station.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-white/50">
            <Users size={12} />
            <span className="text-[11px]">{station.listeners.toLocaleString()} listening</span>
          </div>
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center
            transition-all duration-300
            ${isActive && isPlaying
              ? 'bg-white text-black'
              : 'bg-white/20 text-white group-hover:bg-white group-hover:text-black'
            }
          `}>
            {isActive && isPlaying
              ? <Radio size={18} />
              : <Play size={18} className="ml-0.5" fill="currentColor" />
            }
          </div>
        </div>
      </div>
    </button>
  );
}
