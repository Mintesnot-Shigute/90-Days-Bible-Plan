create table if not exists readers (
  name text primary key,
  created_at timestamptz default now()
);

create table if not exists progress (
  reader_name text references readers(name) on delete cascade,
  day int not null check (day between 1 and 90),
  ot boolean default false,
  nt boolean default false,
  ps boolean default false,
  pr boolean default false,
  updated_at timestamptz default now(),
  primary key (reader_name, day)
);

-- trusted private group: open policies are acceptable
alter table readers enable row level security;
alter table progress enable row level security;
create policy "all read" on readers for select using (true);
create policy "all write" on readers for all using (true) with check (true);
create policy "all read p" on progress for select using (true);
create policy "all write p" on progress for all using (true) with check (true);

-- enable realtime
alter publication supabase_realtime add table progress;
alter publication supabase_realtime add table readers;
