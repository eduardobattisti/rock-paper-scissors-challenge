import React from "react";
import Score from "@components/Score";
import themeWrapper from "../helpers/themeWrapper";
import { cleanup, fireEvent, screen } from "@testing-library/react";

describe("Score Component", () => {
  it("Should show the current score", () => {
    const wrapper = themeWrapper(<Score score={3} />);
    const score = wrapper.getByTestId("score");

    expect(score.innerHTML).toBe(3);
  });
});
