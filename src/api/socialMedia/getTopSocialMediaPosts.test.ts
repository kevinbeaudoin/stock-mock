import getTopSocialMediaPosts from "./getTopSocialMediaPosts";

test("Should return an empty array if we reach the end", async () => {
    const msgs = await getTopSocialMediaPosts("AAPL", "twitter", 100, 2);

    expect(msgs.length).toBe(0);
});

test("Should return an array of messages.", async () => {
    const msgs = await getTopSocialMediaPosts("AAPL", "twitter", 0, 2);

    expect(msgs.length).toBe(2);
    expect(msgs[0].stockSymbol).toBe("AAPL");
    expect(msgs[0].socialMediaType).toBe("twitter");
    expect(msgs[0].message).toBeTruthy();
});
