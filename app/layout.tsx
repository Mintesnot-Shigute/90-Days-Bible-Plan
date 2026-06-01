import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '90-days-bible-reading',
  description: 'Share the journey with friends',
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
