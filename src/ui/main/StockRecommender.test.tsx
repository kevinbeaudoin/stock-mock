import React from "react";
import { render } from "@testing-library/react";
import StockRecommender from "./StockRecommender";

test("renders the Summary", () => {
    const recommender = render(<StockRecommender />);

    const selectElements = recommender.container.querySelectorAll("select");
    const inputElements = recommender.container.querySelectorAll("input");
    const buttonElements = recommender.container.querySelectorAll("button");

    expect(selectElements.length).toBe(2);
    expect(inputElements.length).toBe(1);
    expect(buttonElements.length).toBe(1);
});
