# Ethiopian Traditional Day System Implementation

## Overview

This Bible reading application uses the **Ethiopian traditional day system** where a day runs from **6:00 AM to 5:59:59 AM the next calendar day**, instead of the standard midnight-to-midnight system.

## Day Boundary

- **Day Start**: 6:00 AM (06:00:00)
- **Day End**: 5:59:59 AM the next calendar day
- **Time Period**: 6:00 AM - 11:59 PM = Current Ethiopian day
- **Early Morning Hours**: 12:00 AM - 5:59 AM = Previous Ethiopian day

### Examples

| Local Time | Ethiopian Day | Calendar Date |
|---|---|---|
| 5:30 AM Mon | Day X-1 | Monday |
| 6:00 AM Mon | Day X | Monday |
| 3:00 PM Mon | Day X | Monday |
| 11:59 PM Mon | Day X | Monday |
| 12:00 AM Tue | Day X | Tuesday |
| 5:59 AM Tue | Day X | Tuesday |
| 6:00 AM Tue | Day X+1 | Tuesday |

## Centralized Implementation

All date/time calculations are centralized in **`app/lib/dates.ts`** to ensure consistency across the entire application.

### Key Functions

#### `getTodaysDayNumber(): number`
Returns the current Ethiopian day number (1-90).
- Automatically adjusts for the 6 AM boundary
- If current time is between 12:00 AM - 5:59 AM, returns the previous day
- Used by all components and features for day-based operations

```typescript
// Example: If it's 3:00 AM on June 15, 2026
getTodaysDayNumber() // Returns day number for June 14, 2026
```

#### `getDayDate(dayNumber: number): Date`
Returns the calendar date for a given Ethiopian day number.
- Used to display dates in UI (showing which calendar date corresponds to each day)
- Dates displayed are the calendar dates, not affected by the 6 AM shift

```typescript
getDayDate(1) // Returns: June 1, 2026 (START_DATE)
getDayDate(2) // Returns: June 2, 2026
```

#### `getEthiopianDayDate(date: Date): Date`
Internal function that calculates which Ethiopian day a given timestamp falls into.
- Adjusts timestamps before 6:00 AM to the previous day
- Normalizes to midnight for comparison

#### `getCurrentEthiopianDay(): { dayNumber: number; millisUntilNextDay: number }`
Provides current day and time until next day boundary (6:00 AM tomorrow or 6:00 AM today).
- Useful for animations, countdowns, or day-end operations

#### `isTimestampInEthiopianDay(timestamp: Date, dayNumber: number): boolean`
Checks if a given timestamp falls within a specific Ethiopian day.
- Used for activity logging and verification

## Features Using Ethiopian Day System

### 1. **Daily Progress Tracking**
- `getTodaysDayNumber()` determines which day's readings to display
- Progress updates are saved with Ethiopian day numbers
- All progress calculations respect the 6 AM boundary

### 2. **Streaks**
- Streaks are calculated based on consecutive complete Ethiopian days
- `calculateStreak()` in `stats.ts` uses Ethiopian day logic

### 3. **Day Completion**
- A day is considered "complete" when all 4 reading sections (OT, NT, PS, PR) reach 100%
- Uses `isDayComplete()` which operates on Ethiopian day numbers

### 4. **Fines**
- `calculateFine()` counts "missed days" as Ethiopian days that have passed without completion
- A missed day = any Ethiopian day before today that is not 100% complete
- 50 birr penalty per missed day

### 5. **Day Locking**
- Days numbered higher than `getTodaysDayNumber()` are locked (cannot be edited)
- Users can only edit today's readings (or catch up on past days)

### 6. **Daily Logs & Reports**
- Activity feed and completion reports timestamp with actual time
- But day assignments use Ethiopian day numbers
- Timeline views correctly show which Ethiopian day each activity occurred

### 7. **Group Statistics**
- Group progress percentages calculated across all readers
- All day calculations use Ethiopian day boundaries
- Daily group stats show per-day completion across all readers

### 8. **Calendar Heatmap**
- Each cell represents an Ethiopian day
- Calendar visualization correctly maps Ethiopian days to calendar dates
- Color coding based on completion status

## Edge Cases Handled

### At Exactly 6:00 AM
- Time 6:00:00 AM is considered START of the current Ethiopian day (not previous day)
- User can update readings at exactly 6:00 AM

### Timezone Considerations
- All calculations use local browser time (device timezone)
- Timestamps stored in database are ISO strings with timezone info
- `getEthiopianDayDate()` uses `getHours()` which respects browser timezone

### Day 1 Special Case
- If START_DATE is June 1, 2026 at 5:00 AM
- An update at 3:00 AM June 1 still counts toward Day 1 (since 3 AM is still part of Day 1's Ethiopian day cycle)

### Boundary Transitions
- Tested to ensure no gaps or overlaps when transitioning from day X to day X+1
- 5:59:59 AM = last second of Ethiopian day X
- 6:00:00 AM = first second of Ethiopian day X+1

## Files Modified

### Core Date Logic
- **`app/lib/dates.ts`**: Main implementation of Ethiopian day system
  - Added helper functions for day adjustment
  - Updated `getTodaysDayNumber()` to account for 6 AM shift
  - Added utility functions for day calculations

### Statistics
- **`app/lib/stats.ts`**: Updated `calculateFine()` documentation
  - Confirms all calculations use Ethiopian day system

### Group Statistics  
- **`app/lib/groupStats.ts`**: Added system notes
  - Documents that all operations use Ethiopian day system

## Testing the Implementation

### Manual Tests to Verify

1. **Test at 3:00 AM**: 
   - Update readings for a day
   - Verify it counts toward the previous Ethiopian day (not today)

2. **Test at 6:00 AM**:
   - At exactly 6:00 AM, verify updates count toward the new Ethiopian day

3. **Test Day Locking**:
   - Tomorrow's readings should be locked for editing
   - Yesterday's readings should be editable for catch-up

4. **Test Streaks**:
   - Complete consecutive days across the midnight boundary
   - Verify streak counts correctly using Ethiopian day logic

5. **Test Fines**:
   - Skip a day, then check fine calculation
   - Verify missed days are counted using Ethiopian day logic

6. **Test Activity Log**:
   - Complete a reading at 1:00 AM
   - Verify activity logs with correct timestamp but correct Ethiopian day

## Implementation Notes

- **No Database Changes Required**: Existing progress table works as-is
- **Day Column Already Correct**: Since we calculate Ethiopian day numbers on the client
- **Timestamps Unchanged**: `updated_at` continues to store ISO strings for activity tracking
- **Display Times Unchanged**: All times displayed to users are actual local times
- **Only Day Calculations Shift**: Only the day boundary shifts by 6 hours, not the displayed time

## API Integration

When syncing with Supabase or other backends:
- Always use `getTodaysDayNumber()` to get current day number
- Store day numbers directly (1-90)
- Timestamps are actual times (not adjusted)
- No special timezone handling needed - browser timezone is respected automatically
