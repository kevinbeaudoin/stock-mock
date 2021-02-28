export type SocialMediaType = "twitter" | "reddit";

export const POSITIVE_COUNT = 70;
export const NEUTRAL_COUNT = 40;
export type Sentiment = "positive" | "neutral" | "negative";

export interface IStockMediaCount {
    socialMediaType: SocialMediaType;
}

export interface ISocialMediaPost {
    stockSymbol: string;
    socialMediaType: SocialMediaType;
    message: string;
}
