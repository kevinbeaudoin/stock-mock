export const MOCK_MAX_STOCK_PRICE = 1000;

export default async function stockPriceGenerator(
    stockSymbol: string,
    fromDate: Date,
    toDate: Date
): Promise<number[]> {
    const diffInMs = toDate.getTime() - fromDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const prices = [];
    for (let i = 0; i < diffInDays; i++) {
        prices.push(
            (stockSymbol === "GME" ? 1 : Math.random()) * MOCK_MAX_STOCK_PRICE
        );
    }
    return Promise.resolve(prices);
}
