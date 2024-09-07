export function getUrl(key: string, endpoint: string) {
    const rand = hash(key, endpoint);
    switch (rand) {
        case 1:
            return process.env.NEXT_PUBLIC_API_URL_MORN || process.env.NEXT_PUBLIC_API_URL;
        case 2:
            return process.env.NEXT_PUBLIC_API_URL_EVEN || process.env.NEXT_PUBLIC_API_URL;
        case 3:
            return process.env.NEXT_PUBLIC_API_URL_NIGHT || process.env.NEXT_PUBLIC_API_URL;
        default:
            return process.env.NEXT_PUBLIC_API_URL;
    }
}

export const revalUrl = process.env.NEXT_PUBLIC_API_URL;

function hash(token: string, endpoint: string): number {
    const combined = `${token}:${endpoint}`;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        hash = (hash << 5) - hash + combined.charCodeAt(i);
        hash |= 0;
    }

    const minutes = Math.floor(Date.now() / (1000 * 60 * 5));
    return Math.abs((hash + minutes) % 3) + 1;
}
