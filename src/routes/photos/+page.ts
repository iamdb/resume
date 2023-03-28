// @ts-expect-error For some reason the yaml is not being seen as a module.
import { shows, intro, title } from '$lib/content/concert-photos.yaml';
import MarkdownIt from 'markdown-it';
import type { PageLoad } from './$types';

export interface Show {
	artist: string;
	location: string;
	date: Date;
	photos: string[];
}

export const load = (async () => {
	const allShows: Show[] = shows.map((show: Show) => {
		show.date = new Date(show.date);

		return show;
	});

	allShows.sort((a, b) => {
		if (a.date.toString() === 'Invalid Date' || b.date.toString() === 'Invalid Date') {
			return -1;
		}
		if (a.date > b.date) {
			return 1;
		} else if (a.date < b.date) {
			return -1;
		} else if (a.date === b.date) {
			if (a.artist > b.artist) {
				return -1;
			} else {
				return 1;
			}
		}

		return 0;
	});

	const md = new MarkdownIt();

	return {
		title,
		shows: allShows,
		intro: md.render(intro)
	};
}) satisfies PageLoad;
