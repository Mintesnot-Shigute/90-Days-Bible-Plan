@echo off
REM Quick Favicon Generator Script (Windows)
REM Generates all favicon formats from SVG

setlocal enabledelayedexpansion
cls

echo.
echo   =======================================
echo   🎨  Bible Favicon Generator (Windows)
echo   =======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed
    echo    Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

REM Check if sharp is installed
npm list sharp --depth=0 >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📦 Installing sharp (image processing library)...
    echo.
    call npm install sharp --save-dev
    echo.
)

REM Run the favicon generator
echo 🖼️  Generating favicons...
echo.
node scripts\generate-favicons.js

REM Check if favicons were generated
if exist "public\favicon-32x32.png" (
    echo.
    echo ✅ Favicons generated successfully!
    echo.
    echo 📋 Generated files:
    dir /b public\favicon-*.png
    dir /b public\apple-touch-icon-*.png
    echo.
    echo 🚀 Next steps:
    echo    1. Run: npm run dev
    echo    2. Visit: http://localhost:3000
    echo    3. Check browser tab for Bible icon
    echo.
) else (
    echo.
    echo ❌ Failed to generate favicons
    pause
    exit /b 1
)

pause
