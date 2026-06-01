# Project Structure & Files

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Set up Supabase schema
# 1. Go to Supabase SQL Editor
# 2. Paste contents of supabase/schema.sql
# 3. Run the migration

# Run locally
npm run dev

# Build for production
npm run build
```

## File Structure

```
90-days-bible-reading/
├── .env                          # Environment variables (YOU fill this in)
├── .env.example                  # Template for env vars
├── .gitignore                    # Git ignore rules
├── README.md                     # Setup & overview
├── DEPLOYMENT.md                 # Deployment steps (this file)
├── package.json                  # Dependencies
├── package-lock.json
├── vite.config.js                # Vite build config
├── tailwind.config.js            # Tailwind CSS theme
├── postcss.config.js             # PostCSS config
├── index.html                    # HTML entry point
│
├── supabase/
│   └── schema.sql                # Database schema (run in Supabase SQL Editor)
│
├── src/
│   ├── main.tsx                  # React app entry point
│   ├── App.tsx                   # Main app component (tabs, router)
│   ├── App.css                   # App styles
│   ├── index.css                 # Global styles + Tailwind directives
│   ├── plan.ts                   # 90-day reading plan data (hardcoded)
│   ├── types.ts                  # TypeScript type definitions
│   │
│   ├── lib/
│   │   ├── supabase.ts           # Supabase client initialization
│   │   └── stats.ts              # Helper functions for calculations
│   │
│   ├── hooks/
│   │   ├── useReaders.ts         # Fetch & subscribe to readers
│   │   ├── useProgress.ts        # Fetch & subscribe to progress
│   │   ├── useCurrentReader.ts   # Manage current reader in localStorage
│   │   └── index.ts              # Export all hooks
│   │
│   └── components/
│       ├── NameGate.tsx          # Name selection screen (first load)
│       ├── Header.tsx            # Top bar: name, stats, menu
│       ├── TodayTab.tsx          # Today's readings + checkboxes
│       ├── PlanTab.tsx           # 90-day grid view
│       ├── GroupTab.tsx          # Leaderboard + group stats
│       └── index.ts              # Export all components
│
└── public/
    └── vite.svg                  # Placeholder logo
```

## Key Technologies

| Tool | Purpose | Version |
|------|---------|---------|
| **Vite** | Build tool / dev server | Latest |
| **React** | UI framework | 18+ |
| **TypeScript** | Type safety | Latest |
| **Tailwind CSS v4** | Styling | Latest (@tailwindcss/postcss) |
| **Supabase** | Backend (DB + Realtime) | Latest (@supabase/supabase-js) |
| **lucide-react** | Icons | Latest |

## Data Flow

### Realtime Sync

1. **User checks a box** in TodayTab
   - Calls `supabase.from("progress").upsert(...)`
   - Updates local state

2. **Supabase broadcasts the change** via Realtime
   - All 8 devices receive the update
   - Each calls the `postgres_changes` listener in `useProgress` hook
   - Local state updates automatically

3. **UI re-renders**
   - Header stats recalculate
   - Group leaderboard updates
   - No page refresh needed

### Data Structures

**Readers table:**
```
name (text, primary key) | created_at (timestamp)
"Alice"                  | 2026-01-01 12:00:00
"Bob"                    | 2026-01-01 12:15:00
```

**Progress table:**
```
reader_name | day | ot | nt | ps | pr | updated_at
"Alice"     | 1   | ✓  | ✓  | ✗  | ✗  | 2026-01-01 12:30:00
"Alice"     | 2   | ✓  | ✓  | ✓  | ✓  | 2026-01-01 14:00:00
```

## Component Hierarchy

```
App
├── NameGate (if no currentReader)
└── [Main UI]
    ├── Header
    ├── [Tab Content]
    │  ├── TodayTab (reading checkboxes)
    │  ├── PlanTab (90-day grid)
    │  └── GroupTab (leaderboard)
    └── Tab Navigation (Today / Plan / Group buttons)
```

## Hooks Used

| Hook | Purpose |
|------|---------|
| `useReaders()` | Fetch all readers + subscribe to changes |
| `useProgress()` | Fetch all progress records + subscribe to changes |
| `useCurrentReader()` | Manage current reader in localStorage |
| `useState()` | Tab selection, menu toggle |
| `useEffect()` | Supabase subscriptions, initialization |
| `useMemo()` | Expensive calculations (stats, leaderboard) |
| `useCallback()` | Stable function refs for event handlers |

## Environment Variables

These are required in `.env` and in Vercel settings:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

## Build & Deployment

**Local development:**
```bash
npm run dev       # Start dev server on http://localhost:5173
npm run build     # Compile to dist/ folder
npm run preview   # Preview production build locally
```

**Production (Vercel):**
- Automatically runs `npm run build`
- Deploys `dist/` folder to a global CDN
- Every push to `main` branch auto-deploys (if using GitHub Actions)

## Cost Breakdown

| Service | Cost | Limit |
|---------|------|-------|
| **Supabase** | Free | 500 MB DB, good for 8 people |
| **Vercel** | Free | Includes all features needed |
| **Total** | $0 | ✅ |

## Customization Ideas

### Styling
- Change colors in `tailwind.config.js`
- Modify fonts in `src/index.css`
- Update colors in component className attributes

### Data
- Add a 7th book (e.g., more NT chapters)
- Extend to 180 days
- Swap reading plan in `src/plan.ts`

### Features
- Add a shared journal/notes section
- Export progress as PDF
- Add email reminders
- Allow customizing reading plan

All of these would just require adding tables to Supabase and components to React.

---

**Status**: ✅ Ready to deploy!  
**Last Updated**: June 1, 2026
