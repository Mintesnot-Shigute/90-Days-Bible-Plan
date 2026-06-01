export interface Reader {
  name: string;
  created_at: string;
}

export interface Progress {
  reader_name: string;
  day: number;
  ot: number;  // 0, 25, 50, 75, or 100
  nt: number;  // 0, 25, 50, 75, or 100
  ps: number;  // 0, 25, 50, 75, or 100
  pr: number;  // 0, 25, 50, 75, or 100
  updated_at: string;
}

export interface DayProgress {
  ot: number;  // 0, 25, 50, 75, or 100
  nt: number;  // 0, 25, 50, 75, or 100
  ps: number;  // 0, 25, 50, 75, or 100
  pr: number;  // 0, 25, 50, 75, or 100
}
