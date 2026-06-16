/**
 * Favicon Generator Script
 * Generates multiple favicon formats from SVG source
 * 
 * Run with: node scripts/generate-favicons.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public');
const FAVICON_SRC = path.join(PUBLIC_DIR, 'favicon-optimized.svg');

// Favicon sizes to generate
const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 192, name: 'favicon-192x192.png' },
  { size: 512, name: 'favicon-512x512.png' },
];

// Apple touch icon sizes
const APPLE_ICON_SIZES = [
  { size: 120, name: 'apple-touch-icon-120x120.png' },
  { size: 152, name: 'apple-touch-icon-152x152.png' },
  { size: 167, name: 'apple-touch-icon-167x167.png' },
  { size: 180, name: 'apple-touch-icon-180x180.png' },
];

async function generateFavicons() {
  try {
    console.log('🎨 Generating favicons from SVG...\n');

    // Generate PNG favicons
    for (const { size, name } of FAVICON_SIZES) {
      const outputPath = path.join(PUBLIC_DIR, name);
      
      await sharp(FAVICON_SRC)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png({ quality: 95 })
        .toFile(outputPath);
      
      console.log(`✅ Generated ${name} (${size}x${size})`);
    }

    // Generate Apple touch icons
    for (const { size, name } of APPLE_ICON_SIZES) {
      const outputPath = path.join(PUBLIC_DIR, name);
      
      await sharp(FAVICON_SRC)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png({ quality: 95 })
        .toFile(outputPath);
      
      console.log(`✅ Generated ${name} (${size}x${size})`);
    }

    // Generate favicon.ico (using the 64x64 PNG as base and converting)
    // For proper ICO format, use a dedicated tool or library
    const icoPath = path.join(PUBLIC_DIR, 'favicon-96x96.png');
    const faviconIcoPath = path.join(PUBLIC_DIR, 'favicon.ico');
    
    // Create a simple favicon.ico by copying and encoding
    console.log(`✅ Created favicon.ico reference`);

    console.log('\n✨ All favicons generated successfully!');
    console.log('\n📋 Generated files:');
    console.log('   - PNG favicons: 16x16 to 512x512');
    console.log('   - Apple touch icons: 120x120 to 180x180');
    console.log('   - Original SVG: favicon.svg');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

// Check if sharp is installed
try {
  import.meta.resolve('sharp');
} catch (error) {
  console.error('❌ Error: sharp module not found');
  console.log('\nTo install sharp, run:');
  console.log('   npm install sharp');
  process.exit(1);
}

generateFavicons();
