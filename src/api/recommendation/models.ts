export type Recommendation = "buy" | "hold" | "sell";

export interface IStockRecommendation {
    stockPrices: number[];
    socialMediaCounts: number;
}
