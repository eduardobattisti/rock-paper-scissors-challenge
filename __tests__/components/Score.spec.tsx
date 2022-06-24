import React from "react";
import Score from "@components/Score";
import themeWrapper from "../helpers/themeWrapper";
import { screen } from "@testing-library/react";

describe("Score Component", () => {
  it("Should show the current score", () => {
    themeWrapper(<Score score={3} />);
    const score = screen.getByTestId("score");
    expect(score.innerHTML).toBe("3");
  });
});
