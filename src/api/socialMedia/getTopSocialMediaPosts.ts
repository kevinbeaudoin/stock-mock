import { SocialMediaType, ISocialMediaPost } from "./models";

const MOCK_MESSAGE =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const MOCK_MAX_POST = 10;
export default async function getTopSocialMediaPosts(
    stockSymbol: string,
    socialMediaType: SocialMediaType,
    page: number,
    limit: number,
): Promise<ISocialMediaPost[]> {
    if (page * limit >= MOCK_MAX_POST) {
        return Promise.resolve([]);
    }
    const result = [];
    for (let i = 0; i < limit; i++) {
        let start = Math.floor((MOCK_MESSAGE.length / 2) * Math.random());
        result.push({ stockSymbol, socialMediaType, message: MOCK_MESSAGE.slice(start, start + 50) });
    }
    return Promise.resolve(result);
}
