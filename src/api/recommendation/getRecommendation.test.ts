import getRecommendation, { MOCK_BUY_HOLD_MIN_COUNT } from "./getRecommendation";

test("Should return a buy if last price > avg price and social count > 50 .", async () => {
    const params = {
        stockPrices: [10, 20, 30, 40, 50],
        socialMediaCounts: MOCK_BUY_HOLD_MIN_COUNT + 1,
    };

    const recommendation = await getRecommendation(params);

    expect(recommendation).toBe("buy");
});

test("Should return a hold if last price > avg price and social count <= 50 .", async () => {
    const params = {
        stockPrices: [10, 20, 30, 40, 50],
        socialMediaCounts: MOCK_BUY_HOLD_MIN_COUNT,
    };

    const recommendation = await getRecommendation(params);

    expect(recommendation).toBe("hold");
});

test("Should return a sell if last price < avg price", async () => {
    const params = {
        stockPrices: [10, 20, 30, 40, 10],
        socialMediaCounts: MOCK_BUY_HOLD_MIN_COUNT,
    };

    const recommendation = await getRecommendation(params);

    expect(recommendation).toBe("sell");
});
