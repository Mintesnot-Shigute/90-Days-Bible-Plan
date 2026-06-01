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
