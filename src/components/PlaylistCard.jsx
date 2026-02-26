import { Play, Music } from 'lucide-react';

export default function PlaylistCard({ playlist }) {
  return (
    <button className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.07] rounded-xl p-3 transition-all duration-200 text-left w-full">
      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${playlist.gradient} flex items-center justify-center flex-shrink-0`}>
        <Music size={22} className="text-white/80" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white truncate">{playlist.name}</p>
        <p className="text-xs text-white/40 truncate">{playlist.description}</p>
        <p className="text-[10px] text-white/25 mt-0.5">{playlist.songCount} songs</p>
      </div>
      <div className="w-9 h-9 rounded-full bg-brand-600/0 group-hover:bg-brand-600 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 flex-shrink-0">
        <Play size={16} className="text-white ml-0.5" fill="currentColor" />
      </div>
    </button>
  );
}
