function getProscrape() {
    const timePart = getRand();
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

function getRand(): number {
    const currentHour = new Date().getHours();
    const block = Math.floor(currentHour / 2);
    const randomValue = (block + 1) * 73 % 3;
    return randomValue + 1;
}

export const ProscrapeURL = getProscrape()