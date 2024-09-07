export function getUrl() {
    const rand = Math.floor(Math.random() * 3) + 1;
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
