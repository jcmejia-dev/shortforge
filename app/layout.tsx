import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShortForge Studio',
  description: 'Your one-person AI content studio.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}