# Deployment Guide: 90-Day Bible Reading Tracker

This guide walks you through deploying your Bible reading tracker to Vercel for free, giving you and your 8 friends a live, shareable link.

## Prerequisites

- A Supabase project with the schema set up (see README.md)
- A GitHub account
- A Vercel account (free)
- Node.js and npm installed locally

## Step 1: Set Up Your Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new free project
2. Wait for it to initialize
3. Go to **Settings → API** and copy:
   - **Project URL** (e.g., `https://your-project.supabase.co`)
   - **Anon Public Key** (the `anon` key under Project API keys)
4. Go to **SQL Editor** and paste the entire contents of `supabase/schema.sql`
5. Click "Run" to execute the migration

**Important**: Make sure both of these lines completed successfully:
```sql
alter publication supabase_realtime add table progress;
alter publication supabase_realtime add table readers;
```

These enable real-time updates so all 8 friends see changes instantly.

## Step 2: Update Your Environment Variables

Edit `.env` in your project root:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace with your actual values from Supabase.

Test locally:
```bash
npm run dev
```

Open `http://localhost:5173` and make sure it loads. Try creating a reader and checking off a day.

## Step 3: Push to GitHub

```bash
# Initialize git (only if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "90-day Bible reading tracker"

# Add your GitHub repo as remote
# (Create a new repo on github.com first)
git remote add origin https://github.com/your-username/90-days-bible-reading

# Push
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Using the Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally (one time)
npm install -g vercel

# Deploy to production
vercel --prod
```

You'll be prompted to:
1. Link to your GitHub project
2. Confirm the build settings (should auto-detect Vite)
3. Set environment variables (see below)

### Option B: Using the Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Select your GitHub repository (`90-days-bible-reading`)
4. Vercel should auto-detect Vite settings
5. Before deploying, set **Environment Variables**:
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your anon key
6. Click "Deploy"

## Step 5: Get Your Shareable Link

After deployment completes, you'll get a URL like:

```
https://your-app.vercel.app
```

Or if you linked your GitHub repo:
- Vercel auto-deploys on every push to `main`
- You can also see deployment history and roll back if needed

## Step 6: Share the Link

Send this URL to your 8 friends via email, group chat, etc.:

```
https://your-app.vercel.app
```

Each person:
1. Opens the link in Chrome (or any browser)
2. Enters their name (or picks an existing name)
3. Starts checking off daily readings
4. Sees everyone's progress update in real-time

## Troubleshooting

### App loads but shows "Missing Supabase credentials"
- Check that `.env` variables are set in Vercel dashboard
- Go to Vercel Project → Settings → Environment Variables
- Make sure both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set

### Real-time updates aren't working
- Verify in Supabase SQL Editor that these lines ran successfully:
  ```sql
  alter publication supabase_realtime add table progress;
  alter publication supabase_realtime add table readers;
  ```
- If not, run them manually in the SQL Editor

### "Invalid API Key" error
- Double-check you copied the **Anon Public Key**, not a different key
- Go back to Supabase Settings → API to verify

### Build failed on Vercel
- Check the deployment logs: Vercel Project → Deployments → (failed deployment) → Logs
- Common causes: missing env vars, Node version issue
- Vercel defaults to Node 18, which is fine for this project

## Updating the App

After deployment, if you want to make changes:

1. Edit files locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push origin main
   ```
4. Vercel auto-deploys (no action needed)

## Offline Local Testing

To test the app without Supabase (or if you're offline):

1. Use any name to sign in
2. The app will fail when trying to save, but you can see the UI

For full testing with persistence, you need Supabase credentials in `.env`.

## What's Deployed

Vercel will:
- Run `npm run build` (compiles React + TypeScript)
- Upload the `dist/` folder to a global CDN
- Give you a live URL accessible from anywhere

The app is entirely static + client-side (no server code), so it's lightning-fast and costs $0 to host.

---

**Next Step**: Open your Vercel URL in Chrome and invite your group! 🎉
