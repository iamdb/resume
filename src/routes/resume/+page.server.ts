import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const activity = await getActivity()
    const languages = await getLanguages()

    return { languages: languages?.splice(0, 10), activity }
  } catch {
    throw error(404, 'Not found');
  }
}

async function getActivity(): Promise<CodingActivity | undefined> {
  const res = await fetch("https://wakatime.com/share/@iamdb/27e70931-5231-44ff-8451-28dc565e6d85.json")

  if (res.ok) {
    const { data } = await res.json()

    return data
  }
}

async function getLanguages(): Promise<Language[] | undefined> {
  const res = await fetch(
    "https://wakatime.com/share/@iamdb/9d4f49c3-737c-4cc6-b178-1a3abc5dd2e3.json"
  );

  if (res.ok) {
    const json: { data: Language[] } = await res.json();
    const langs = json.data;

    return langs.filter((v) => v.name !== 'Other' && v.name !== 'JSON' && v.name !== 'JSX' && v.name !== 'SCSS')
  }
}

export interface Language {
  color: string;
  name: string;
  percent: number;
}

export interface CodingActivity {
  best_day: BestDay;
  grand_total: GrandTotal;
  range: Range;
}

export interface BestDay {
  date: Date;
  text: string;
  total_seconds: number;
}

export interface GrandTotal {
  daily_average: number;
  daily_average_including_other_language: number;
  human_readable_daily_average: string;
  human_readable_daily_average_including_other_language: string;
  human_readable_total: string;
  human_readable_total_including_other_language: string;
  total_seconds: number;
  total_seconds_including_other_language: number;
}

export interface Range {
  days_including_holidays: number;
  days_minus_holidays: number;
  end: Date;
  holidays: number;
  range: string;
  start: Date;
}
