import { ListMusic } from 'lucide-react';
import PlaylistCard from './PlaylistCard';
import { playlists } from '../data/stations';

export default function PlaylistsView() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <ListMusic size={24} className="text-brand-400" />
          <h2 className="text-3xl font-bold text-white font-display">Playlists</h2>
        </div>
        <p className="text-white/40">Curated playlists for every moment of your day</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {playlists.map(playlist => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>

      <div className="mt-12 text-center py-12 border-2 border-dashed border-white/10 rounded-2xl">
        <ListMusic size={48} className="mx-auto text-white/10 mb-3" />
        <p className="text-white/30 text-sm">More playlists coming soon</p>
        <p className="text-white/15 text-xs mt-1">Music will be added shortly</p>
      </div>
    </div>
  );
}
