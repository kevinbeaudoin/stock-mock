import React from "react";
import { render, screen } from "@testing-library/react";
import StockSummary from "./StockSummary";

test("renders the Summary", () => {
    render(<StockSummary />);
    const headerElement = screen.getByText(/Stock Summary/i);
    expect(headerElement).toBeInTheDocument();
});
