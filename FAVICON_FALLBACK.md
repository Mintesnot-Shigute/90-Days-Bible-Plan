/**
 * Fallback Favicon Setup (SVG-only, no dependencies)
 * Use this if you can't install sharp or prefer SVG-only approach
 * 
 * Paste this into the <head> section of your HTML or update metadata.tsx
 */

/*
If using Next.js 13+ with App Router, add to app/layout.tsx:

export const metadata: Metadata = {
  // ... other metadata ...
  
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' },
    shortcut: '/favicon.svg',
  },
  
  manifest: '/manifest.json',
};

If using traditional HTML (index.html), add to <head>:

<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any">
<link rel="apple-touch-icon" href="/favicon.svg">
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#c9a876">
*/

// Browser support for SVG favicons:
// ✅ Chrome 45+
// ✅ Firefox 41+
// ✅ Safari 15+
// ✅ Edge 79+
// ⚠️  IE 11 - fallback to PNG needed

// For maximum compatibility, ensure:
// 1. favicon.svg is in public/ directory
// 2. manifest.json exists with icon references
// 3. At least one PNG fallback is available (for older browsers)

// Cache busting strategies:
// Option 1: Modify HTML/metadata periodically
// Option 2: Use service worker to refresh
// Option 3: Set cache headers: Cache-Control: max-age=604800, immutable

// Recommended next.config.js headers for favicons:
const nextConfig = {
  async headers() {
    return [
      {
        source: '/favicon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable', // 1 week
          },
        ],
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
      {
        source: '/favicon-(.*).png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
      {
        source: '/apple-touch-icon-(.*).png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
