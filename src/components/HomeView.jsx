import { Sparkles, TrendingUp, Clock } from 'lucide-react';
import StationCard from './StationCard';
import PlaylistCard from './PlaylistCard';
import NowPlayingBar from './NowPlayingBar';
import { usePlayer } from '../hooks/PlayerContext';
import { stations, playlists, recentlyPlayed } from '../data/stations';

function Greeting() {
  const hour = new Date().getHours();
  let greeting = 'Good evening';
  if (hour < 12) greeting = 'Good morning';
  else if (hour < 17) greeting = 'Good afternoon';

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-white font-display">
        {greeting}
      </h2>
      <p className="text-white/40 mt-1">What would you like to worship to today?</p>
    </div>
  );
}

function SectionHeader({ icon, title, subtitle }) {
  const IconComp = icon;
  return (
    <div className="flex items-center gap-2 mb-4">
      <IconComp size={18} className="text-brand-400" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {subtitle && <span className="text-xs text-white/30 ml-1">{subtitle}</span>}
    </div>
  );
}

export default function HomeView() {
  const { activeStation } = usePlayer();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6 lg:p-8">
        <Greeting />
      </div>

      {activeStation && (
        <div className="px-6 lg:px-8">
          <NowPlayingBar />
        </div>
      )}

      <div className="px-6 lg:px-8 pb-6">
      <section className="mb-10">
        <SectionHeader icon={Sparkles} title="Live Stations" subtitle="Tune in now" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stations.map(station => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeader icon={TrendingUp} title="Featured Playlists" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {playlists.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      <section className="mb-6">
        <SectionHeader icon={Clock} title="Recently Played" />
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
      </section>
      </div>
    </div>
  );
}
