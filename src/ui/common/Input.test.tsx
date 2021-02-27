import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

test("input renders properly", () => {
    const recommender = render(<Input />);

    const inputElements = recommender.container.querySelectorAll("input");

    expect(inputElements.length).toBe(1);
});

test("input renders current value properly", () => {
    const recommender = render(<Input value="test" />);

    const inputElements = recommender.container.querySelectorAll("input");

    expect(inputElements[0].value).toBe("test");
});
