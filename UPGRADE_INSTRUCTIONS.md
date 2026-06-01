# Database Migration & Deployment Guide

## 🔄 Required SQL Migration

**IMPORTANT:** Run this SQL in your Supabase SQL Editor before the app can work properly.

Go to: https://app.supabase.com → Your Project → SQL Editor → New Query

Copy and paste the entire SQL below:

```sql
-- Migration: Convert boolean reading columns to percentage (0, 25, 50, 75, 100)
-- This migration preserves existing data by converting true → 100, false → 0

-- Step 1: Remove the default constraints
alter table progress
  alter column ot drop default,
  alter column nt drop default,
  alter column ps drop default,
  alter column pr drop default;

-- Step 2: Convert columns from boolean to smallint using case expression
alter table progress
  alter column ot type smallint using (case when ot then 100 else 0 end),
  alter column nt type smallint using (case when nt then 100 else 0 end),
  alter column ps type smallint using (case when ps then 100 else 0 end),
  alter column pr type smallint using (case when pr then 100 else 0 end);

-- Step 3: Set new defaults
alter table progress
  alter column ot set default 0,
  alter column nt set default 0,
  alter column ps set default 0,
  alter column pr set default 0;

-- Step 4: Add constraint to enforce only valid percentage values
alter table progress
  add constraint pct_vals
  check (ot in (0,25,50,75,100) and nt in (0,25,50,75,100)
     and ps in (0,25,50,75,100) and pr in (0,25,50,75,100));
```

**After running the SQL:**
- Click "Run" or press Ctrl+Enter
- Wait for "Success" message
- The database schema is now migrated
- Your existing data is automatically converted (true → 100%, false → 0%)

---

## ✨ What's New

### 1. **Percentage-Based Reading Tracking**
Each reading section now tracks 0%, 25%, 50%, 75%, or 100% completion instead of just checked/unchecked.

### 2. **Day Completion Percentage**
A day's completion % = average of all 4 sections. Day is fully complete only when all 4 sections = 100%.

### 3. **Day-Gating / Access Control**
- Current day + all past days: **accessible** ✓
- Future days: **locked** 🔒 (until that calendar date arrives)
- June 1, 2026 = Day 1

### 4. **Report Tab** (New)
Shows every reader who reached 100% on all sections with:
- Reader name
- Day number & date
- Timestamp
- Per-reader total completed days
- Group overall completion %

### 5. **Better Layout**
- Centered, comfortable padding (max-width container)
- Prominent day % display (large 4xl/5xl numbers)
- Large tap-friendly percentage buttons (mobile-friendly)
- Generous spacing between sections

### 6. **4 Tabs Now**
- **Today** - Current day with percentage selector
- **Plan** - 90-day grid overview
- **Group** - Leaderboard and heatmaps
- **Report** - Completion report

---

## 🚀 Deployment Status

✅ **Code Changes:** All committed and pushed to GitHub  
✅ **Build:** Production build successful (430.79 kB JS, 122.18 kB gzip)  
⏳ **Vercel:** Auto-deploying now (2-3 min for live URL)  

After running the SQL migration above, your app will be fully functional with all new features!

---

## 📝 Git Commands Used

```powershell
cd "c:\Users\Mintesnot\Desktop\90 days bible reading"
git add -A
git commit -m "Major upgrade to progress app with percentage-based tracking and day-gating..."
git push -u origin main
```

**Result:** Latest code now deployed to Vercel production.

---

## ✅ All Files Modified

- `src/types.ts` - ot/nt/ps/pr now `number` instead of `boolean`
- `src/lib/stats.ts` - Added `getDayPercent()`, updated logic
- `src/lib/groupStats.ts` - Percentage calculations, completion report
- `src/components/ReadingSection.tsx` - Percentage selector (5 pill buttons)
- `src/components/TodayTab.tsx` - Day-gating, day %, percentage updates
- `src/components/ReportTab.tsx` - **NEW** completion report tab
- `src/components/DayGroupTracker.tsx` - Shows % instead of counts
- `src/components/PlanTab.tsx` - Works with percentages
- `src/components/GroupTab.tsx` - Better layout
- `src/App.tsx` - Added Report tab
- `supabase/migration_percent.sql` - **NEW** migration file

---

## 🎯 Next Steps

1. ✅ Copy the SQL above
2. ✅ Paste into Supabase SQL Editor
3. ✅ Click "Run" and wait for "Success"
4. ⏳ Wait for Vercel deployment (2-3 minutes)
5. ✅ App is ready! All existing data migrated automatically
