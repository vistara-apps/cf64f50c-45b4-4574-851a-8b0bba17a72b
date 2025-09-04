'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Percent, Clock } from 'lucide-react';

const portfolioMetrics = [
  {
    label: 'Portfolio Value',
    value: '$103,96.99',
    change: '+$10.88',
    changePercent: '+90.88%',
    icon: DollarSign,
    color: 'text-accent',
  },
  {
    label: 'AutoSuperMA',
    value: '$10,235',
    change: '+$523',
    changePercent: '+5.38%',
    icon: TrendingUp,
    color: 'text-primary',
  },
  {
    label: 'Order Strategy',
    value: '$891',
    change: '-$12',
    changePercent: '-1.3%',
    icon: Percent,
    color: 'text-red-400',
  },
  {
    label: 'Avg Execution',
    value: '2.1s',
    change: '-0.3s',
    changePercent: '-12%',
    icon: Clock,
    color: 'text-green-400',
  },
];

export function PortfolioSummary() {
  return (
    <div className="glass-effect rounded-lg p-4 border border-white/10">
      <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
      
      <div className="space-y-3">
        {portfolioMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.change.startsWith('+');
          
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Icon size={16} className={metric.color} />
                <span className="text-sm">{metric.label}</span>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-semibold">{metric.value}</div>
                <div className={`text-xs ${
                  isPositive ? 'text-accent' : 'text-red-400'
                }`}>
                  {metric.change} ({metric.changePercent})
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-3 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
        >
          Rebalance
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-3 py-2 bg-surface hover:bg-surface/80 rounded-lg text-sm font-medium transition-colors"
        >
          Analytics
        </motion.button>
      </div>
    </div>
  );
}
