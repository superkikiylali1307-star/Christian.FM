import { useState } from 'react';
import {
  Home,
  Radio,
  ListMusic,
  Heart,
  Clock,
  Search,
  Settings,
  ChevronLeft,
  ChevronRight,
  Music2,
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Radio, label: 'Stations', id: 'stations' },
  { icon: ListMusic, label: 'Playlists', id: 'playlists' },
  { icon: Heart, label: 'Favorites', id: 'favorites' },
  { icon: Clock, label: 'Recent', id: 'recent' },
];

export default function Sidebar({ activeView, onNavigate }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        flex flex-col h-full bg-surface-900/80 backdrop-blur-xl
        border-r border-white/5 transition-all duration-300 ease-in-out
        ${collapsed ? 'w-[72px]' : 'w-[260px]'}
      `}
    >
      <div className={`flex items-center gap-3 px-5 pt-6 pb-4 ${collapsed ? 'justify-center px-0' : ''}`}>
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center flex-shrink-0">
          <Music2 size={18} className="text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-lg font-bold tracking-tight leading-none">
              Christian<span className="text-brand-400">.FM</span>
            </h1>
            <p className="text-[10px] text-white/40 tracking-widest uppercase mt-0.5">
              Worship & Praise
            </p>
          </div>
        )}
      </div>

      {!collapsed && (
        <div className="px-4 mb-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search music..."
              className="w-full bg-white/5 border border-white/5 rounded-lg py-2 pl-9 pr-3 text-sm
                         placeholder:text-white/30 focus:outline-none focus:border-brand-500/50
                         focus:bg-white/8 transition-all"
            />
          </div>
        </div>
      )}

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          const IconComp = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                w-full flex items-center gap-3 rounded-lg transition-all duration-200
                ${collapsed ? 'justify-center px-0 py-3' : 'px-3 py-2.5'}
                ${isActive
                  ? 'bg-brand-600/20 text-brand-300'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                }
              `}
              title={collapsed ? item.label : undefined}
            >
              <IconComp size={20} className={isActive ? 'text-brand-400' : ''} />
              {!collapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
              {isActive && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-400" />
              )}
            </button>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="px-4 py-4">
          <div className="rounded-xl bg-gradient-to-br from-brand-900/60 to-brand-800/40 p-4 border border-brand-700/20">
            <p className="text-xs font-semibold text-brand-300 mb-1">Daily Verse</p>
            <p className="text-[11px] text-white/60 leading-relaxed italic">
              "Make a joyful noise unto the Lord, all the earth."
            </p>
            <p className="text-[10px] text-white/30 mt-1.5">— Psalm 100:1</p>
          </div>
        </div>
      )}

      <div className="px-3 pb-4 space-y-1">
        <button
          className={`w-full flex items-center gap-3 rounded-lg text-white/40 hover:text-white/60 hover:bg-white/5 transition-all ${collapsed ? 'justify-center px-0 py-3' : 'px-3 py-2.5'}`}
        >
          <Settings size={18} />
          {!collapsed && <span className="text-sm">Settings</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`w-full flex items-center gap-3 rounded-lg text-white/30 hover:text-white/50 hover:bg-white/5 transition-all ${collapsed ? 'justify-center px-0 py-3' : 'px-3 py-2.5'}`}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed && <span className="text-sm">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
