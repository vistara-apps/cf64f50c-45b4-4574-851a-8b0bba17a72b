'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface LiquidityCardProps {
  variant: 'primary' | 'secondary';
  token: string;
  price: string;
  change: string;
  volume: string;
}

export function LiquidityCard({ variant, token, price, change, volume }: LiquidityCardProps) {
  const isPositive = change.startsWith('+');
  const isPrimary = variant === 'primary';

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className={`glass-effect rounded-lg p-4 ${
        isPrimary ? 'border border-primary/30' : 'border border-white/10'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
            isPrimary ? 'bg-primary/20 text-primary' : 'bg-surface text-foreground'
          }`}>
            {token}
          </div>
        </div>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUp size={12} className="text-accent" />
          ) : (
            <TrendingDown size={12} className="text-red-400" />
          )}
          <span className={`text-xs ${
            isPositive ? 'text-accent' : 'text-red-400'
          }`}>
            {change}
          </span>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="text-lg font-semibold">{price}</div>
        <div className="text-xs text-foreground/60">Vol: {volume}</div>
      </div>

      <div className="mt-3 h-1 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.random() * 100}%` }}
          className={`h-full ${
            isPrimary ? 'bg-primary' : 'bg-accent'
          }`}
        />
      </div>
    </motion.div>
  );
}
