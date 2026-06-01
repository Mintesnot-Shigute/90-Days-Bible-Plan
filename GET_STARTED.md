# 🚀 GET STARTED: Bible Reading Tracker Live in 20 Minutes

## Status: ✅ READY TO DEPLOY

Your app is **100% built, tested, and ready**. Follow this guide to get it live.

---

## The Plan

```
Supabase Setup (5 min) → Update .env (1 min) → Test Local (2 min) 
→ Git Push (3 min) → Vercel Deploy (3 min) → Share Link (1 min)
= 15 minutes total
```

---

## 🔑 Before You Start

Have these ready in a text editor:
- Supabase Project URL (from supabase.com)
- Supabase Anon Key (from supabase.com)
- GitHub username (for pushing code)
- Vercel account (free, via GitHub login)

---

## STEP 1️⃣ : Create Supabase Project

**Time: 5 minutes**

### 1. Create Project

1. Open https://supabase.com
2. Click **New Project**
3. Fill in:
   - **Name**: `90-day-bible` (or any name)
   - **Password**: Generate strong password, save it somewhere
   - **Region**: Choose closest to you
4. Click **Create new project**
5. Wait 1-2 minutes for it to initialize

### 2. Copy Your Credentials

Once initialized:

1. Click **Settings** (bottom-left, gear icon)
2. Click **API** (left menu)
3. **Under "Project API Keys"**, find and copy:
   - **Project URL** — e.g., `https://xyz123.supabase.co`
   - **Anon public** key — long string, starts with `eyJ...`

4. Paste both into a text editor (save for next step)

### 3. Set Up Database

1. In Supabase, click **SQL Editor** (left menu)
2. Click **New query**
3. In your project folder, open:
   ```
   supabase/schema.sql
   ```
4. Copy the **entire** file contents
5. Paste into the Supabase SQL Editor
6. Click **Run** (top-right)

You should see green checkmarks. If you see errors, click **Run** again (they're usually ordering issues that resolve on re-run).

**Verify**: Scroll down and confirm you see success for these two lines:
```sql
ALTER PUBLICATION supabase_realtime ADD TABLE progress;
ALTER PUBLICATION supabase_realtime ADD TABLE readers;
```

✅ **Supabase is ready**

---

## STEP 2️⃣: Update .env File

**Time: 1 minute**

1. Open file:
   ```
   C:\Users\Mintesnot\Desktop\90 days bible reading\.env
   ```

2. Replace with YOUR Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your_project_id.supabase.co
   VITE_SUPABASE_ANON_KEY=paste_your_anon_key_here
   ```

3. **Save the file** (Ctrl+S)

**Example of what it looks like (with fake values):**
```
VITE_SUPABASE_URL=https://fxyzabc123.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4eXphYmMxMjMiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcwNjc0OTI4MCwiZXhwIjoxODY0NTE1MjgwfQ.VGQoXRX-jjJFBzB9zB7xQ9zB7xQ9zB7xQ9zB7xQ9zB7w
```

⚠️ **DO NOT** commit this file to GitHub (it's in `.gitignore`, so it's safe).

✅ **.env is updated**

---

## STEP 3️⃣: Test Locally

**Time: 2 minutes**

### Run the App

1. Open **PowerShell**
2. Copy-paste this:
   ```powershell
   cd "C:\Users\Mintesnot\Desktop\90 days bible reading"
   npm run dev
   ```

3. You should see:
   ```
   ➜  Local:   http://localhost:5173/
   ```

4. Open that URL in **Chrome**

### Test It

- [ ] You see the Bible tracker UI
- [ ] You can type a name and click "Join"
- [ ] You can check off a reading
- [ ] The page doesn't error

**Stop the server**: Press `Ctrl+C` in PowerShell

✅ **App works locally**

---

## STEP 4️⃣: Push to GitHub

**Time: 3 minutes**

### First-Time Setup

1. Go to https://github.com/new
2. **Repository name**: `90-days-bible-reading`
3. **Description**: `Real-time 90-day Bible reading tracker`
4. **Public** or **Private** (your choice; private is safer)
5. **Do NOT check** "Initialize with README"
6. Click **Create repository**

### Push Your Code

7. Open PowerShell in your project folder:
   ```powershell
   cd "C:\Users\Mintesnot\Desktop\90 days bible reading"
   ```

8. Run these commands (copy-paste all together):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: 90-day Bible reading tracker"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/90-days-bible-reading
   git push -u origin main
   ```

   ⚠️ **Replace `YOUR_USERNAME`** with your actual GitHub username

9. If prompted for password, use a **GitHub Personal Access Token** (not your password):
   - Go to github.com → Settings → Developer settings → Personal access tokens
   - Create a new token with `repo` scope
   - Use the token as your password in PowerShell

### Verify

- Go to https://github.com/YOUR_USERNAME/90-days-bible-reading
- You should see your files

✅ **Code is on GitHub**

---

## STEP 5️⃣: Deploy to Vercel

**Time: 3 minutes**

### Option A: Using Vercel CLI (Easier)

1. Open PowerShell in your project:
   ```powershell
   cd "C:\Users\Mintesnot\Desktop\90 days bible reading"
   ```

2. Run:
   ```powershell
   npm install -g vercel
   vercel --prod
   ```

3. First time it will ask questions. Answer like this:
   - **Set up and deploy?** → `y`
   - **Which scope?** → Select your GitHub account
   - **Link to existing project?** → `n`
   - **What's your project's name?** → `90-days-bible-reading`
   - **In which directory is your code?** → Press Enter (use default)
   - **Auto-detected project settings** → Press Enter to confirm

4. **Wait for deployment** (2 minutes)

5. You'll see:
   ```
   ✅ Production: https://90-days-bible-reading-xxx.vercel.app
   ```

6. **Copy that URL** ← This is your live app!

### Option B: Using Vercel Dashboard

1. Go to https://vercel.com and sign in with GitHub
2. Click **New Project**
3. Select `90-days-bible-reading` repo
4. **Before deploying**, scroll to **Environment Variables**
5. Click **Add Variable** twice:
   - Name: `VITE_SUPABASE_URL` | Value: Your Supabase URL
   - Name: `VITE_SUPABASE_ANON_KEY` | Value: Your anon key
6. Click **Deploy**
7. **Wait 2-3 minutes**
8. When done, you get a URL

✅ **App is live**

---

## STEP 6️⃣: Share with Your Friends

**Time: 1 minute**

1. Copy your Vercel URL
   - Example: `https://90-days-bible-reading-abc123.vercel.app`

2. Send it to all 8 friends via:
   - Email
   - Text message
   - Group chat (Discord, Slack, iMessage, etc.)

3. Tell them:
   > "Open this link, pick a name, and start reading! See everyone's progress in real-time."

### What They See

- They open the link
- They see a name-entry screen
- They type their name or pick an existing one
- They see the app and can start checking off readings
- All updates appear **live** on everyone's screens

✅ **Your group is tracking together!**

---

## 🎯 After Deployment: Make Updates

If you want to change something:

```powershell
# Make changes to your files
# Then:

git add .
git commit -m "Update description or add feature"
git push origin main

# Vercel automatically re-deploys!
# Check https://vercel.com for deployment status
```

---

## ❓ Troubleshooting

### "App loads but says 'Missing Supabase credentials'"

**Fix**: Environment variables aren't set in Vercel

1. Go to https://vercel.com
2. Select your project
3. Go to **Settings → Environment Variables**
4. Add both:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. In Vercel, click **Redeploy**

### "Real-time updates aren't working (friends don't see my checks)"

**Fix**: Supabase Realtime setup issue

1. Go back to Supabase SQL Editor
2. Run `supabase/schema.sql` again
3. Specifically, confirm these lines succeeded:
   ```sql
   ALTER PUBLICATION supabase_realtime ADD TABLE progress;
   ALTER PUBLICATION supabase_realtime ADD TABLE readers;
   ```

### "Build failed on Vercel"

**Fix**: Check the logs

1. Go to Vercel → Your Project → Deployments
2. Click the failed deployment
3. Scroll down to see error messages
4. Common causes:
   - Missing env vars (see fix #1 above)
   - Node version (shouldn't be an issue; Vercel uses Node 18)

### "I can't push to GitHub (authentication error)"

**Fix**: Use Personal Access Token instead of password

1. Go to https://github.com/settings/tokens
2. Click **Generate new token**
3. Select `repo` scope
4. Copy the token
5. When PowerShell asks for password, paste the token

---

## 📊 What You've Built

| Component | What It Does |
|-----------|-------------|
| **Vite** | Builds React into fast static files |
| **React** | Powers the UI and tabs |
| **Tailwind** | Makes it beautiful and responsive |
| **Supabase** | Stores readings + syncs in real-time |
| **Vercel** | Hosts your app globally for free |

**Result**: A live app 8 friends can share, with no login, no passwords, no complexity.

---

## 💾 File Safety

The `.env` file (with your Supabase secrets):
- ✅ Is in `.gitignore` (won't be committed to GitHub)
- ✅ Is NOT visible to others (only you can see it locally)
- ✅ IS passed to Vercel via dashboard (Vercel stores it securely)

So your secrets are safe. GitHub doesn't see them. The app gets them via environment variables.

---

## 🎉 You're Done!

At this point:

1. ✅ Supabase is set up
2. ✅ Your code is on GitHub
3. ✅ Your app is live on Vercel
4. ✅ 8 friends can access it
5. ✅ Real-time sync is working

**Total time**: 15 minutes  
**Total cost**: $0  
**Maintenance**: Minimal (Vercel auto-deploys on git push)

---

## 📖 Docs Reference

- **QUICK_START.md** — Step-by-step copy-paste guide
- **DEPLOYMENT.md** — Detailed deployment explanations
- **README.md** — Setup and features overview
- **PROJECT_STRUCTURE.md** — Technical architecture
- **FINAL_CHECKLIST.md** — Complete checklist

---

## 🙏 Next Steps

1. **Follow this guide** — Complete all 6 steps
2. **Test with friends** — Have them open the link
3. **Enjoy reading together** — That's it!

---

**Questions?** Read the docs above. They cover 99% of scenarios.

**Ready?** Go to **STEP 1** and start! 🚀
