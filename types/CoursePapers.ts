export type CoursePapers = {
	name: string;
	code: string;
	urls: {
		semester: string;
		urls: {
			period: string;
			url: string;
			raw: string;
		}[];
	}[];
};