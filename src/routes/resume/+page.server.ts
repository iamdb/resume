// @ts-expect-error For some reason the yaml is not being seen as a module.
import { experience, projects } from '$lib/content/resume.yaml';
import { error } from '@sveltejs/kit';
import {
	Urls,
	type CodingActivityAllTime,
	type CodingActivityLastYear,
	type CodingActivityNormalized,
	type Language
} from '$lib/types/wakatime';
import type { Job } from '$lib/types/resume';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	experience.forEach((e: Job) => e.stack.sort());

	return {
		languagesAlltime: fetchJson(Urls.LanguagesAllTime, fetch),
		activityAlltime: fetchJson(Urls.ActivityAllTime, fetch),
		activityLastYear: fetchJson(Urls.ActivityLastYear, fetch),
		languagesLastYear: fetchJson(Urls.LanguagesLastYear, fetch),
		workExperience: experience,
		notableProjects: projects
	};
}) satisfies PageServerLoad;

async function fetchJson(
	url: Urls,
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
): Promise<Language[] | CodingActivityNormalized | undefined> {
	try {
		const res = await fetch(url);

		if (res.ok) {
			switch (url) {
				case Urls.ActivityLastYear: {
					const json: CodingActivityLastYear = await res.json();

					return normalizeLastYearCodingActivity(json);
				}
				case Urls.ActivityAllTime: {
					const json: { data: CodingActivityAllTime } = await res.json();

					return normalizeAllTimeCodingActivity(json.data);
				}
				case Urls.LanguagesAllTime:
				case Urls.LanguagesLastYear: {
					const json: { data: Language[] } = await res.json();

					return filterLangs(json.data);
				}
			}
		}
	} catch (err) {
		throw error(500, `${err}`);
	}
}

function normalizeAllTimeCodingActivity(activity: CodingActivityAllTime): CodingActivityNormalized {
	const totalHours = activity.grand_total.total_seconds_including_other_language / 60 / 60;
	const startDate = new Date(activity.range.start);
	const dailyAverageHours = activity.grand_total.daily_average / 60 / 60;

	return {
		totalHours,
		startDate,
		dailyAverageHours
	};
}

function normalizeLastYearCodingActivity(
	activity: CodingActivityLastYear
): CodingActivityNormalized {
	const totalHours: number = activity?.days.reduce((a, b) => a + b.total, 0) / 60 / 60;
	const startDate = new Date(activity?.days[0].date);
	const dailyAverageHours = totalHours / activity?.days.length;

	return {
		totalHours,
		startDate,
		dailyAverageHours
	};
}

function filterLangs(langs: Language[]): Language[] {
	return langs
		.filter(
			(v) =>
				v.name !== 'Other' &&
				v.name !== 'JSON' &&
				v.name !== 'JSX' &&
				v.name !== 'SCSS' &&
				v.name !== 'conf' &&
				v.name !== 'TeX' &&
				v.name !== 'INI'
		)
		.slice(0, 10);
}
