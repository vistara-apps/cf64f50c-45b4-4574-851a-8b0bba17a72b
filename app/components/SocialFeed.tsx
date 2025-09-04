'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, MessageCircle, Heart, Share } from 'lucide-react';

const socialPosts = [
  {
    id: 1,
    user: { name: 'DefiTrader', avatar: '🚀' },
    action: 'bought',
    token: 'ETH',
    amount: '2.5',
    price: '$2,975',
    change: '+5.2%',
    timestamp: '2m ago',
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    user: { name: 'CryptoWhale', avatar: '🐋' },
    action: 'sold',
    token: 'BTC',
    amount: '0.1',
    price: '$43,200',
    change: '-2.1%',
    timestamp: '5m ago',
    likes: 8,
    comments: 1,
  },
  {
    id: 3,
    user: { name: 'BaseBuilder', avatar: '⚡' },
    action: 'swapped',
    token: 'USDC → BASE',
    amount: '1000',
    price: '$0.85',
    change: '+12.3%',
    timestamp: '8m ago',
    likes: 24,
    comments: 7,
  },
];

export function SocialFeed() {
  return (
    <div className="space-y-3 max-h-80 overflow-y-auto scrollbar-hide">
      {socialPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-effect rounded-lg p-3 border border-white/10"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-sm">
              {post.user.avatar}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium">{post.user.name}</span>
                <span className="text-xs text-foreground/60">{post.timestamp}</span>
              </div>
              
              <p className="text-xs text-foreground/80 mb-2">
                <span className="capitalize">{post.action}</span> {post.amount} {post.token} 
                {post.price && (
                  <>
                    {' '}at {post.price}
                    <span className={`ml-2 ${
                      post.change.startsWith('+') ? 'text-accent' : 'text-red-400'
                    }`}>
                      {post.change.startsWith('+') ? (
                        <TrendingUp size={12} className="inline mr-1" />
                      ) : (
                        <TrendingDown size={12} className="inline mr-1" />
                      )}
                      {post.change}
                    </span>
                  </>
                )}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-foreground/60">
                <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                  <Heart size={12} />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <MessageCircle size={12} />
                  {post.comments}
                </button>
                <button className="flex items-center gap-1 hover:text-accent transition-colors">
                  <Share size={12} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Load More */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        className="w-full py-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
      >
        Load more signals...
      </motion.button>
    </div>
  );
}
