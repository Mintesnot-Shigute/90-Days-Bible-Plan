import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '90 Days Bible Reading - Share the Journey',
  description: 'A beautiful, real-time collaborative Bible reading tracker for 90-day reading plans with friends',
  keywords: 'Bible, reading plan, 90 days, Christian, faith, community',
  authors: [{ name: 'Bible Reading Community' }],
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.svg',
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
