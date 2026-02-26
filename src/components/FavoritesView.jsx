import { Heart } from 'lucide-react';

export default function FavoritesView() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Heart size={24} className="text-brand-400" />
          <h2 className="text-3xl font-bold text-white font-display">Favorites</h2>
        </div>
        <p className="text-white/40">Your liked songs and saved stations</p>
      </div>

      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-24 h-24 rounded-full bg-brand-900/30 flex items-center justify-center mb-6">
          <Heart size={40} className="text-brand-400/50" />
        </div>
        <h3 className="text-xl font-semibold text-white/60 mb-2">No favorites yet</h3>
        <p className="text-sm text-white/30 text-center max-w-sm">
          Start listening and tap the heart icon to save your favorite songs and stations here.
        </p>
      </div>
    </div>
  );
}
