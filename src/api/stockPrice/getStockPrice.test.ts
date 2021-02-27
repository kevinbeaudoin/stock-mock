import getStockPrice, { MOCK_MAX_STOCK_PRICE } from "./getStockPrice";

test("Should return the right amount of prices based on supplied dates.", async () => {
    const fromDate = new Date("2021-01-01");
    const toDate = new Date("2021-01-10");

    const prices = await getStockPrice("AAPL", fromDate, toDate);

    expect(prices.length).toBe(9);
});

test("Should return an empty array on invalid dates.", async () => {
    const fromDate = new Date("2021-01-10");
    const toDate = new Date("2021-01-01");

    const prices = await getStockPrice("AAPL", fromDate, toDate);

    expect(prices.length).toBe(0);
});

test("Should return max stock price for GME (to the moon).", async () => {
    const fromDate = new Date("2021-01-01");
    const toDate = new Date("2021-01-10");

    const prices = await getStockPrice("GME", fromDate, toDate);

    for (let price of prices) {
        expect(price).toBe(MOCK_MAX_STOCK_PRICE);
    }
});
