'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Settings, 
  Wallet,
  Search,
  Bell
} from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

interface AppShellProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'trade', icon: TrendingUp, label: 'Trade' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'social', icon: Users, label: 'Social' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export function AppShell({ children, activeTab, onTabChange }: AppShellProps) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-16 lg:w-64 glass-effect border-r border-white/10 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="hidden lg:block">
              <h2 className="font-semibold">RallyTrade</h2>
              <p className="text-xs text-foreground/60">Liquidity Hub</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'hover:bg-white/5 text-foreground/70 hover:text-foreground'
                }`}
              >
                <Icon size={20} />
                <span className="hidden lg:block text-sm font-medium">
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="ml-auto w-1 h-1 rounded-full bg-primary"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-white/10">
          <div className="hidden lg:block">
            <ConnectWallet />
          </div>
          <div className="lg:hidden">
            <button className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
              <Wallet size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="glass-effect border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                <input
                  type="text"
                  placeholder="Search tokens, pools..."
                  className="pl-10 pr-4 py-2 bg-surface/50 border border-white/10 rounded-lg text-sm w-64 focus:outline-none focus:border-primary/50"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Bell size={20} />
                <div className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </button>
              
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Base Mainnet</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
