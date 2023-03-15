export interface CodingActivityNormalized {
	totalHours: number;
	startDate: Date;
	dailyAverageHours: number;
}

export enum Urls {
	ActivityLastYear = 'https://wakatime.com/share/@iamdb/a0164736-c1d5-4c80-ac33-a4160bfaab40.json',
	LanguagesLastYear = 'https://wakatime.com/share/@iamdb/a7ae5fd0-13df-415e-b6b5-387c8a30b97a.json',
	ActivityAllTime = 'https://wakatime.com/share/@iamdb/27e70931-5231-44ff-8451-28dc565e6d85.json',
	LanguagesAllTime = 'https://wakatime.com/share/@iamdb/9d4f49c3-737c-4cc6-b178-1a3abc5dd2e3.json'
}

export enum LanguageScale {
	AllTime,
	LastYear
}

export interface Language {
	color: string;
	name: string;
	percent: number;
}

export interface CodingActivityAllTime {
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

export interface CodingActivityLastYear {
	days: Day[];
	human_readable_range: string;
	is_already_updating: boolean;
	is_including_today: boolean;
	is_stuck: boolean;
	is_up_to_date: boolean;
	is_up_to_date_pending_future: boolean;
	percent_calculated: number;
	range: string;
	status: string;
	user_id: string;
	writes_only: boolean;
}

export interface Day {
	categories: Category[];
	date: Date;
	total: number;
}

export interface Category {
	name: Name;
	total: number;
}

export enum Name {
	Coding = 'Coding'
}
