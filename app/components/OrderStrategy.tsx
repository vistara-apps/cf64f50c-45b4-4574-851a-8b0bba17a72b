'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Clock, TrendingUp } from 'lucide-react';

const strategies = [
  {
    id: 'best-price',
    name: 'Best Price',
    icon: Target,
    description: 'Optimize for lowest price',
    risk: 'Low',
    color: 'text-accent',
  },
  {
    id: 'low-slippage',
    name: 'Low Slippage',
    icon: Zap,
    description: 'Minimize price impact',
    risk: 'Medium',
    color: 'text-primary',
  },
  {
    id: 'speed',
    name: 'Speed',
    icon: Clock,
    description: 'Fastest execution',
    risk: 'High',
    color: 'text-yellow-400',
  },
  {
    id: 'adaptive',
    name: 'Adaptive',
    icon: TrendingUp,
    description: 'AI-powered routing',
    risk: 'Auto',
    color: 'text-purple-400',
  },
];

export function OrderStrategy() {
  const [selectedStrategy, setSelectedStrategy] = useState('best-price');

  return (
    <div className="space-y-4">
      {/* Strategy Selection */}
      <div className="grid grid-cols-2 gap-2">
        {strategies.map((strategy) => {
          const Icon = strategy.icon;
          const isSelected = selectedStrategy === strategy.id;
          
          return (
            <motion.button
              key={strategy.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedStrategy(strategy.id)}
              className={`p-3 rounded-lg border transition-all ${
                isSelected
                  ? 'border-primary/50 bg-primary/10'
                  : 'border-white/10 bg-surface/30 hover:border-white/20'
              }`}
            >
              <Icon size={16} className={strategy.color} />
              <div className="text-xs font-medium mt-1">{strategy.name}</div>
              <div className="text-xs text-foreground/60 mt-1">{strategy.risk}</div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Strategy Details */}
      <div className="glass-effect rounded-lg p-3 border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          {(() => {
            const strategy = strategies.find(s => s.id === selectedStrategy);
            const Icon = strategy?.icon;
            return Icon ? <Icon size={16} className={strategy.color} /> : null;
          })()}
          <span className="font-medium text-sm">
            {strategies.find(s => s.id === selectedStrategy)?.name}
          </span>
        </div>
        <p className="text-xs text-foreground/70">
          {strategies.find(s => s.id === selectedStrategy)?.description}
        </p>
      </div>

      {/* Advanced Settings */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Max Slippage</span>
          <select className="bg-surface px-2 py-1 rounded text-sm outline-none">
            <option value="0.5">0.5%</option>
            <option value="1.0">1.0%</option>
            <option value="2.0">2.0%</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Gas Priority</span>
          <select className="bg-surface px-2 py-1 rounded text-sm outline-none">
            <option value="standard">Standard</option>
            <option value="fast">Fast</option>
            <option value="instant">Instant</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">MEV Protection</span>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span className="text-xs text-foreground/70">Enabled</span>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
        <div className="text-center">
          <div className="text-xs text-foreground/60">Success Rate</div>
          <div className="text-sm font-semibold text-accent">98.2%</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-foreground/60">Avg Slippage</div>
          <div className="text-sm font-semibold text-primary">0.3%</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-foreground/60">Avg Time</div>
          <div className="text-sm font-semibold">2.1s</div>
        </div>
      </div>
    </div>
  );
}
