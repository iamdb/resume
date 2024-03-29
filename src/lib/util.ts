export function formatDate(date: Date) {
	const newDate = new Date(date);

	return `${intToMonth(newDate.getUTCMonth())} ${newDate.getUTCFullYear()}`;
}

export function intToMonth(int: number): string {
	switch (int) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		case 11:
			return 'December';
	}

	return '';
}

import slugify from 'slugify';

export function slug(num: number, title: string): string {
	return `${String(num).padStart(3, '0')}_${slugify(title, {
		replacement: '_',
		lower: true,
		strict: true
	})}`;
}
