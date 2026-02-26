import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import HomeView from './components/HomeView';
import StationsView from './components/StationsView';
import PlaylistsView from './components/PlaylistsView';
import FavoritesView from './components/FavoritesView';
import RecentView from './components/RecentView';

const views = {
  home: HomeView,
  stations: StationsView,
  playlists: PlaylistsView,
  favorites: FavoritesView,
  recent: RecentView,
};

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const ActiveViewComponent = views[activeView] || HomeView;

  return (
    <div className="h-full flex flex-col bg-surface-950">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} onNavigate={setActiveView} />
        <main className="flex-1 flex overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/20 via-transparent to-transparent pointer-events-none" />
          <ActiveViewComponent />
        </main>
      </div>
      <Player />
    </div>
  );
}
