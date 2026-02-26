import { Clock } from 'lucide-react';
import { recentlyPlayed } from '../data/stations';

export default function RecentView() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Clock size={24} className="text-brand-400" />
          <h2 className="text-3xl font-bold text-white font-display">Recently Played</h2>
        </div>
        <p className="text-white/40">Your listening history</p>
      </div>

      <div className="bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-[11px] text-white/25 uppercase tracking-wider border-b border-white/5">
              <th className="px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium hidden sm:table-cell">Album</th>
              <th className="px-4 py-3 font-medium text-right">Duration</th>
            </tr>
          </thead>
          <tbody>
            {recentlyPlayed.map((track, idx) => (
              <tr
                key={track.id}
                className="group hover:bg-white/[0.03] transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 text-sm text-white/30 group-hover:text-brand-400 w-12 tabular-nums">
                  {idx + 1}
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-white/80 group-hover:text-white">{track.title}</p>
                  <p className="text-xs text-white/30">{track.artist}</p>
                </td>
                <td className="px-4 py-3 text-sm text-white/30 hidden sm:table-cell">{track.album}</td>
                <td className="px-4 py-3 text-sm text-white/30 text-right tabular-nums">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
