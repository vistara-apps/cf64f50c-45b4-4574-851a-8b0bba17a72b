'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown, Settings } from 'lucide-react';

export function TradeInput() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');

  const handleSwap = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="space-y-4">
      {/* From Token */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80">From</label>
        <div className="glass-effect rounded-lg p-3 border border-white/10">
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-lg font-semibold outline-none flex-1"
            />
            <div className="flex items-center gap-2">
              <select 
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
                className="bg-surface px-3 py-1 rounded-md text-sm font-medium outline-none"
              >
                <option value="ETH">ETH</option>
                <option value="USDC">USDC</option>
                <option value="BTC">BTC</option>
                <option value="BASE">BASE</option>
              </select>
            </div>
          </div>
          <div className="text-xs text-foreground/60 mt-1">
            Balance: 2.45 {fromToken}
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSwap}
          className="w-10 h-10 bg-surface hover:bg-surface/80 rounded-full flex items-center justify-center border border-white/20 transition-colors"
        >
          <ArrowUpDown size={16} />
        </motion.button>
      </div>

      {/* To Token */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80">To</label>
        <div className="glass-effect rounded-lg p-3 border border-white/10">
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-lg font-semibold outline-none flex-1"
            />
            <div className="flex items-center gap-2">
              <select 
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
                className="bg-surface px-3 py-1 rounded-md text-sm font-medium outline-none"
              >
                <option value="USDC">USDC</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="BASE">BASE</option>
              </select>
            </div>
          </div>
          <div className="text-xs text-foreground/60 mt-1">
            Balance: 1,250.00 {toToken}
          </div>
        </div>
      </div>

      {/* Trade Info */}
      <div className="space-y-2 text-xs">
        <div className="flex justify-between text-foreground/60">
          <span>Rate</span>
          <span>1 ETH = 2,975.42 USDC</span>
        </div>
        <div className="flex justify-between text-foreground/60">
          <span>Slippage</span>
          <span className="text-accent">0.5%</span>
        </div>
        <div className="flex justify-between text-foreground/60">
          <span>Fee</span>
          <span>0.3%</span>
        </div>
      </div>

      {/* Execute Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-semibold py-3 rounded-lg transition-all duration-200"
      >
        Execute Trade
      </motion.button>

      {/* Settings */}
      <div className="flex justify-center">
        <button className="text-foreground/60 hover:text-foreground transition-colors">
          <Settings size={16} />
        </button>
      </div>
    </div>
  );
}
