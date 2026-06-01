export interface Reader {
  name: string;
  created_at: string;
}

export interface Progress {
  reader_name: string;
  day: number;
  ot: boolean;
  nt: boolean;
  ps: boolean;
  pr: boolean;
  updated_at: string;
}

export interface DayProgress {
  ot: boolean;
  nt: boolean;
  ps: boolean;
  pr: boolean;
}
