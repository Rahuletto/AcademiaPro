export interface ProscrapeError {
	logout: boolean;
	error: boolean;
	ratelimit?: boolean;
	message: string;
	status: number;
}
