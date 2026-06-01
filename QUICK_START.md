# Quick Reference: From Here to Live Vercel URL

Follow these steps in order. The whole process takes ~15 minutes.

## ✅ What's Already Done

- ✓ Project scaffolded with Vite + React + TypeScript
- ✓ Tailwind CSS configured
- ✓ All React components built (TodayTab, PlanTab, GroupTab, Header, NameGate)
- ✓ Supabase client and hooks set up
- ✓ 90-day reading plan data embedded
- ✓ Build tested and working

**Location**: `C:\Users\Mintesnot\Desktop\90 days bible reading\`

---

## 🚀 Step 1: Create Supabase Project (5 mins)

1. Go to [supabase.com](https://supabase.com)
2. Click **New Project**
3. Fill in:
   - **Project name**: `90-day-bible`
   - **Password**: Generate a strong one
   - **Region**: Pick closest to you
4. Wait for initialization (1-2 minutes)
5. Open **Settings → API**
6. Copy and save (in a text editor for now):
   - `Project URL` (looks like `https://xyz123.supabase.co`)
   - `Anon public key` (long string starting with `eyJ...`)

---

## 📊 Step 2: Set Up Database Schema (2 mins)

1. In Supabase, open **SQL Editor** (left sidebar)
2. Click **New query**
3. Open your project folder and copy the entire contents of:
   ```
   supabase/schema.sql
   ```
4. Paste it into the SQL Editor
5. Click **Run**
6. You should see ✅ success messages

**Important**: Scroll down and verify these lines completed:
```
ALTER PUBLICATION supabase_realtime ADD TABLE progress;
ALTER PUBLICATION supabase_realtime ADD TABLE readers;
```

If you see errors, just re-run the query.

---

## 🔧 Step 3: Update Environment Variables (1 min)

1. Open the `.env` file in your project:
   ```
   C:\Users\Mintesnot\Desktop\90 days bible reading\.env
   ```

2. Replace with YOUR values from Supabase:
   ```
   VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
   VITE_SUPABASE_ANON_KEY=YOUR_LONG_ANON_KEY_HERE
   ```

3. Save the file

---

## 🏃 Step 4: Test Locally (2 mins)

Open PowerShell and run:

```bash
cd "C:\Users\Mintesnot\Desktop\90 days bible reading"
npm run dev
```

You should see:
```
  ➜  Local:   http://localhost:5173/
```

Open that URL in Chrome. You should see:
- ✅ The app loads
- ✅ A name-entry screen appears
- ✅ You can type a name and join

Stop the server: Press `Ctrl+C` in PowerShell.

---

## 📤 Step 5: Push to GitHub (3 mins)

### If this is a NEW GitHub repo:

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `90-days-bible-reading`
3. Click **Create repository** (do NOT init with README)
4. Copy the commands shown (they look like below)
5. In PowerShell, cd to your project and run:

```bash
cd "C:\Users\Mintesnot\Desktop\90 days bible reading"

git init
git add .
git commit -m "Initial commit: 90-day Bible reading tracker"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/90-days-bible-reading
git push -u origin main
```

After running, you should see files appear on your GitHub repo page.

### If you already have a GitHub repo:

```bash
cd "C:\Users\Mintesnot\Desktop\90 days bible reading"

git add .
git commit -m "90-day Bible reading tracker"
git push origin main
```

---

## 🌍 Step 6: Deploy to Vercel (3 mins)

### Option A: CLI (Easiest)

```bash
npm install -g vercel
vercel --prod
```

You'll be asked:
- **Set up and deploy?** → `y`
- **Which scope?** → Select your account
- **Link to existing project?** → `n`
- **Project name?** → `90-days-bible-reading` (or anything)
- **Which directory to deploy?** → `.` or default
- **Override settings?** → `N` (use defaults)

After deployment completes, you get a URL like:
```
✅ Production: https://90-days-bible-reading.vercel.app
```

### Option B: Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **New Project**
4. Select `90-days-bible-reading` repo
5. **Before clicking Deploy**, scroll to **Environment Variables**
6. Add two variables:
   - Name: `VITE_SUPABASE_URL` → Value: your Supabase URL
   - Name: `VITE_SUPABASE_ANON_KEY` → Value: your anon key
7. Click **Deploy**
8. Wait ~2 minutes
9. Get your live URL

---

## 🎉 Step 7: Share the Link (1 min)

You now have a URL like:
```
https://90-days-bible-reading.vercel.app
```

Send this to your 8 friends via:
- Email
- Group chat (Slack, Discord, iMessage, WhatsApp, etc.)
- Text message

Everyone can open it in Chrome on phone or desktop, pick a name, and start reading together. **No login required.**

---

## 🔄 Future Deploys

After this, every time you push to GitHub:

```bash
git add .
git commit -m "Your change"
git push origin main
```

Vercel **automatically re-deploys** your app. No more manual steps needed.

---

## ❓ If Something Goes Wrong

**App won't load / says "Missing credentials"**
- Go to Vercel dashboard → Settings → Environment Variables
- Verify both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- Redeploy: Push any change to GitHub or click "Redeploy" in Vercel

**Realtime isn't working (checks don't appear on other devices)**
- Go back to Supabase SQL Editor
- Re-run `supabase/schema.sql` (especially the `alter publication` lines)

**Build failed on Vercel**
- Click on the failed deployment in Vercel
- Click **Logs** to see error
- Usually it's a missing env var

**Name not saved after refresh**
- Make sure `.env` has the correct Supabase credentials
- Try creating a new user in a different browser to test

---

## 📝 Summary

You now have:

1. ✅ A complete React app (built, tested, runs locally)
2. ✅ A PostgreSQL database (Supabase)
3. ✅ Real-time sync (Supabase Realtime)
4. ✅ A deployed URL (Vercel, auto-updates)
5. ✅ A shareable link for 8 friends

**Total time**: ~20 minutes  
**Total cost**: $0  
**Maintenance**: Zero (until you want new features)

---

**You're all set!** 🙏
