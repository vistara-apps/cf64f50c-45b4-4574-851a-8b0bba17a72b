import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'RallyTrade - Your Cross-Protocol Liquidity Hub on Base',
  description: 'Aggregate fragmented DeFi liquidity across protocols on Base with optimized routing and social trading',
  keywords: 'DeFi, Base, liquidity aggregation, social trading, crypto',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
