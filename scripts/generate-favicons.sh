#!/bin/bash
# Quick Favicon Generator Script
# Generates all favicon formats from SVG

echo "🎨 Bible Favicon Generator"
echo "=========================="
echo ""

# Check if sharp is installed
if ! npm list sharp --depth=0 2>/dev/null | grep -q "sharp@"; then
    echo "📦 Installing sharp (image processing library)..."
    npm install sharp --save-dev
    echo ""
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Run the favicon generator
echo "🖼️  Generating favicons..."
node scripts/generate-favicons.js

# Check if favicons were generated
if [ -f "public/favicon-32x32.png" ]; then
    echo ""
    echo "✅ Favicons generated successfully!"
    echo ""
    echo "📋 Generated files:"
    ls -lh public/favicon-*.png 2>/dev/null | awk '{print "   " $9 " (" $5 ")"}'
    ls -lh public/apple-touch-icon-*.png 2>/dev/null | awk '{print "   " $9 " (" $5 ")"}'
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Run: npm run dev"
    echo "   2. Visit: http://localhost:3000"
    echo "   3. Check browser tab for Bible icon"
    echo ""
else
    echo "❌ Failed to generate favicons"
    exit 1
fi
