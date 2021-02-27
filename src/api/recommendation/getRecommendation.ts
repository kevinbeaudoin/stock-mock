export type Recommendation = "buy" | "hold" | "sell";

export interface IStockRecommendation {
    stockPrices: number[];
    socialMediaCounts: number;
}

export const MOCK_BUY_HOLD_MIN_COUNT = 50;
export default async function recommendationAlgorithm(params: IStockRecommendation): Promise<Recommendation> {
    const { socialMediaCounts, stockPrices } = params;
    const totalPrice = stockPrices.reduce((prev, current) => prev + current);
    const avgPrice = totalPrice / params.stockPrices.length;
    const lastPrice = stockPrices[stockPrices.length - 1];

    if (lastPrice >= avgPrice) {
        const recommendation = socialMediaCounts > MOCK_BUY_HOLD_MIN_COUNT ? "buy" : "hold";
        return Promise.resolve<Recommendation>(recommendation);
    } else {
        return Promise.resolve<Recommendation>("sell");
    }
}
