import { SocialMediaType } from "./models";

export const MOCK_MAX_COUNT = 100;
export default async function getSocialMediaCountGenerator(
    stockSymbol: string,
    socialMedia: SocialMediaType,
): Promise<number> {
    if (stockSymbol === "GME" && socialMedia === "reddit") {
        return Promise.resolve(MOCK_MAX_COUNT);
    } else {
        return Math.floor(Math.random() * MOCK_MAX_COUNT);
    }
}
