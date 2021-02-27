import getSocialMediaCount, { MOCK_MAX_COUNT } from "./getSocialMediaCount";

test("Should return a value between 0 and max.", async () => {
    const count = await getSocialMediaCount("AAPL", "twitter");

    expect(count).toBeGreaterThanOrEqual(0);
    expect(count).toBeLessThan(MOCK_MAX_COUNT);
});

test("Should return max count for GME and reddit (to the moon).", async () => {
    const countTwitter = await getSocialMediaCount("GME", "twitter");
    const countReddit = await getSocialMediaCount("GME", "reddit");

    expect(countReddit).toBe(MOCK_MAX_COUNT);
    expect(countTwitter).toBeLessThan(MOCK_MAX_COUNT);
});
