import React from "react";
import { render } from "@testing-library/react";
import Selector from "./Selector";

const ITEMS = [
    { text: "1", value: "1" },
    { text: "2", value: "2" },
    { text: "3", value: "3" },
];

test("select renders properly", () => {
    const recommender = render(<Selector name="test" items={ITEMS} value={"1"} />);

    const selectElements = recommender.container.querySelectorAll("select");

    expect(selectElements.length).toBe(1);
    expect(selectElements[0].value).toBe("1");
});
