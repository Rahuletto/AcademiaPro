function getProscrape() {
    const timePart = Math.floor(new Date().getHours() / 8) + 1;
    switch (timePart) {
        case 1:
            return process.env.NEXT_PUBLIC_API_URL_MORN || process.env.NEXT_PUBLIC_API_URL;
        case 2:
            return process.env.NEXT_PUBLIC_API_URL_EVEN || process.env.NEXT_PUBLIC_API_URL;
        case 3:
            return process.env.NEXT_PUBLIC_API_URL_NIGHT || process.env.NEXT_PUBLIC_API_URL;
        default:
            throw new Error('Invalid time part calculation');
    }
}
export const ProscrapeURL = getProscrape()