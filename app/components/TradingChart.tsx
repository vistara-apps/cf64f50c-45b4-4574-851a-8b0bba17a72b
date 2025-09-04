'use client';

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

interface TradingChartProps {
  type: 'depth' | 'price' | 'liquidity' | 'execution';
}

// Mock data for different chart types
const depthData = Array.from({ length: 20 }, (_, i) => ({
  price: 2900 + i * 10,
  bids: Math.random() * 1000 + 500,
  asks: Math.random() * 1000 + 500,
}));

const priceData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  price: 2950 + Math.sin(i * 0.5) * 100 + Math.random() * 50,
  volume: Math.random() * 1000000,
}));

const liquidityData = Array.from({ length: 30 }, (_, i) => ({
  time: i,
  depth: Math.random() * 5000 + 1000,
  spread: Math.random() * 100 + 50,
}));

const executionData = Array.from({ length: 12 }, (_, i) => ({
  month: `M${i + 1}`,
  executed: Math.random() * 10 + 2,
  slippage: Math.random() * 2 + 0.5,
}));

export function TradingChart({ type }: TradingChartProps) {
  const renderChart = () => {
    switch (type) {
      case 'depth':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={depthData}>
              <defs>
                <linearGradient id="bidGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="askGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="price" hide />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(210 8% 15%)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px'
                }} 
              />
              <Area
                type="monotone"
                dataKey="bids"
                stroke="#10b981"
                fill="url(#bidGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="asks"
                stroke="#ef4444"
                fill="url(#askGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'price':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={priceData}>
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(210 8% 15%)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px'
                }} 
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#a855f7"
                fill="url(#priceGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'liquidity':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={liquidityData}>
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(210 8% 15%)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="depth" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'execution':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={executionData}>
              <defs>
                <linearGradient id="executionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(210 8% 15%)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px'
                }} 
              />
              <Area
                type="monotone"
                dataKey="executed"
                stroke="#3b82f6"
                fill="url(#executionGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full"
    >
      {renderChart()}
    </motion.div>
  );
}
