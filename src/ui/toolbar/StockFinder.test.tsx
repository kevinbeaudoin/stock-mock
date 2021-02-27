import React from "react";
import { render } from "@testing-library/react";
import StockFinder from "./StockFinder";

test("renders the StockFinder", () => {
    const onStockSymbolChanged = (symbol: string) => {};
    const finder = render(<StockFinder onStockSymbolChanged={onStockSymbolChanged} />);
    const inputs = finder.container.getElementsByTagName("input");
    const buttons = finder.container.getElementsByTagName("button");

    expect(inputs.length).toBe(1);
    expect(buttons.length).toBe(1);
});
