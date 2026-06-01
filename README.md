# 90-Day Bible Reading Tracker

A beautiful, real-time Bible reading tracker built for small groups. Share a single link with up to 8 friends, see everyone's live progress, and track your daily readings together.

## Features

- 📖 90-day reading plan (OT, NT, Psalms, Proverbs daily)
- 👥 Real-time group sync with Supabase Realtime
- 📊 Live leaderboard with streaks and progress %
- 📱 Mobile-first, phone and desktop friendly
- 🎨 Beautiful, reverent design
- ✅ No login/passwords — name-based identity
- 🔄 Instant updates across all devices

## Tech Stack

- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Realtime)
- **Icons**: lucide-react
- **Deploy**: Vercel

## Setup Instructions

### 1. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to **Settings → API** to find:
   - Project URL (VITE_SUPABASE_URL)
   - Anon Public Key (VITE_SUPABASE_ANON_KEY)
3. Go to the **SQL Editor** and run the SQL migration from `supabase/schema.sql`:
   ```sql
   -- Paste the entire contents of supabase/schema.sql here
   ```

### 2. Local Setup

```bash
# Install dependencies
npm install

# Create .env file with your Supabase credentials
# Copy from .env.example and fill in your actual values
```

### 3. Environment Variables

Edit `.env`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

You can find these in your Supabase project's **Settings → API** tab.

### 4. Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. You'll be prompted to enter a name to join the group.

## Deployment to Vercel

### 1. Push to GitHub (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/90-days-bible-reading
git push -u origin main
```

### 2. Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or:
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Select your GitHub repository
4. Set environment variables:
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your anon key
5. Click "Deploy"

### 3. Share the Link

After deployment, you'll get a URL like `https://your-app.vercel.app`. Share this single link with all 8 friends. Anyone who opens it in Chrome on phone or desktop will see the group tracker and can join with their name.

## How to Use

1. **First Load**: Enter your name or select from existing readers
2. **Today Tab**: View today's (or any day's) readings and check them off as you complete them
3. **Plan Tab**: See the full 90-day grid; tap any day to jump to it
4. **Group Tab**: Live leaderboard showing everyone's progress, streaks, and group %

## Design Details

- **Cream/parchment background** (#f9f6f3) with warm, reverent feel
- **Gold accent** (#b8860b) for interactive elements
- **Fraunces serif** for headings (reverent, distinctive)
- **Outfit sans-serif** for body text (clean, modern)
- **Real-time updates** via Supabase Realtime—all 8 screens see changes within ~1 second

## Notes

- The Supabase free tier is plenty for 8 people
- The open RLS policies are fine for a private, trusted group. If you later want to lock it down, swap to an anon-readable / authenticated-write policy
- Make sure the `alter publication supabase_realtime...` lines ran in the SQL migration—that's what enables live updates
- Vercel auto-deploys when you push to GitHub (if you connected your repo)

## Streak & Progress Logic

- **Day Complete**: All four readings (OT, NT, Psalms, Proverbs) checked for that day
- **Streak**: Longest run of consecutive fully-complete days
- **Group %**: (Total complete days across all readers) / (readers × 90)

## Troubleshooting

**Env vars not loading?** Make sure your `.env` file is in the root of the project and looks exactly like:
```
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=...
```

**Realtime not working?** Double-check you ran the `alter publication supabase_realtime add table` lines in the SQL editor.

**Build errors?** Run `npm install` again and ensure you're using Node 16+.

---

Built with ♥ for Bible reading together.
