import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders the header", () => {
    render(<Header />);
    const headerElement = screen.getByText(/Stock Mock/i);
    expect(headerElement).toBeInTheDocument();
});
