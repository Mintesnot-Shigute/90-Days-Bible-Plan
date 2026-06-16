import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '90 Days Bible Reading - Share the Journey',
  description: 'A beautiful, real-time collaborative Bible reading tracker for 90-day reading plans with friends',
  keywords: 'Bible, reading plan, 90 days, Christian, faith, community',
  authors: [{ name: 'Bible Reading Community' }],
  viewport: 'width=device-width, initial-scale=1.0',
  
  // Favicon and PWA icons
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon-167x167.png', sizes: '167x167', type: 'image/png' },
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
  },
  
  // PWA manifest
  manifest: '/manifest.json',
  
  // Theme colors
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#c9a876' },
    { media: '(prefers-color-scheme: dark)', color: '#2c1810' },
  ],
  
  // Apple specific
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '90 Days Bible',
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bible-reading.vercel.app',
    title: '90 Days Bible Reading - Share the Journey',
    description: 'A beautiful, real-time collaborative Bible reading tracker',
    images: [
      {
        url: '/favicon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Bible Reading App Icon',
      },
    ],
  },
  
  // Microsoft specific
  msapplication: {
    TileColor: '#c9a876',
    TileImage: '/favicon-144x144.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
