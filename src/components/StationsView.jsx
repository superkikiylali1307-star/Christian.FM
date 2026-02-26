import { Radio } from 'lucide-react';
import StationCard from './StationCard';
import { stations } from '../data/stations';

export default function StationsView() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Radio size={24} className="text-brand-400" />
          <h2 className="text-3xl font-bold text-white font-display">Stations</h2>
        </div>
        <p className="text-white/40">Browse and listen to our curated radio stations</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stations.map(station => (
          <StationCard key={station.id} station={station} />
        ))}
      </div>
    </div>
  );
}
