'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AppShell } from './components/AppShell';
import { LiquidityCard } from './components/LiquidityCard';
import { TradingChart } from './components/TradingChart';
import { TradeInput } from './components/TradeInput';
import { OrderStrategy } from './components/OrderStrategy';
import { SocialFeed } from './components/SocialFeed';
import { PortfolioSummary } from './components/PortfolioSummary';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('trade');

  return (
    <AppShell activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20">
        {/* Hero Section */}
        <div className="relative overflow-hidden px-4 pt-8 pb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-center"
          >
            <h1 className="text-3xl font-bold glow-text mb-2">RallyTrade</h1>
            <p className="text-sm text-foreground/70">Cross-Protocol Liquidity Hub</p>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Factor: $341.75%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Trade: 16.18.10.564</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-4 pb-8 space-y-6"
        >
          {/* Token Overview Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <LiquidityCard
              variant="primary"
              token="ETH"
              price="$2,975.42"
              change="+2.34%"
              volume="31.5M"
            />
            <LiquidityCard
              variant="secondary"
              token="USDC"
              price="$1.00"
              change="+0.01%"
              volume="128M"
            />
            <LiquidityCard
              variant="primary"
              token="BTC"
              price="$43,245"
              change="+1.82%"
              volume="24.7M"
            />
            <LiquidityCard
              variant="secondary"
              token="BASE"
              price="$0.85"
              change="+5.67%"
              volume="8.3M"
            />
          </motion.div>

          {/* Main Trading Interface */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Trading */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              {/* Liquidity Depth Chart */}
              <div className="glass-effect rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Liquidity Depth</h3>
                  <div className="flex gap-2">
                    <span className="text-xs bg-surface px-2 py-1 rounded">30,500</span>
                    <span className="text-xs text-accent">210.66%</span>
                  </div>
                </div>
                <TradingChart type="depth" />
              </div>

              {/* Price Chart */}
              <div className="glass-effect rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Pricing</h3>
                  <div className="text-accent text-sm">$30.54</div>
                </div>
                <TradingChart type="price" />
              </div>

              {/* Liquidity Depth Overview */}
              <div className="glass-effect rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Liquidity Depth</h3>
                <TradingChart type="liquidity" />
              </div>

              {/* Order Execution */}
              <div className="glass-effect rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Order Execution</h3>
                <TradingChart type="execution" />
              </div>
            </motion.div>

            {/* Right Column - Controls */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Portfolio Summary */}
              <PortfolioSummary />

              {/* Trade Input */}
              <div className="glass-effect rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Quick Trade</h3>
                <TradeInput />
              </div>

              {/* Order Strategy */}
              <div className="glass-effect rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Order Strategy</h3>
                <OrderStrategy />
              </div>

              {/* Social Feed */}
              <div className="glass-effect rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Social Signals</h3>
                <SocialFeed />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AppShell>
  );
}
