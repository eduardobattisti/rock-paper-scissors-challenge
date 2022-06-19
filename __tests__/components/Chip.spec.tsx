import React from "react";
import Chip from "@components/Chip";
import themeWrapper from "../helpers/themeWrapper";
import { cleanup, fireEvent, screen } from "@testing-library/react";

describe("Chip Component", () => {
  afterEach(cleanup);

  it("Should render Chip without error", () => {
    const wrapper = themeWrapper(
      <Chip type="rock" isWinner={false} onClick={vi.fn} />
    );

    expect(wrapper).toBeDefined();
  });

  it("Should fire the event when the user choose the Chip", () => {
    const handleClick = vi.fn();

    themeWrapper(<Chip type="rock" isWinner={false} onClick={handleClick} />);

    const getChip = screen.getByTestId("chip");

    fireEvent.click(getChip);

    expect(handleClick).toBeCalled();
  });

  it("Should apply styles to the winner Chip", () => {
    themeWrapper(<Chip type="rock" isWinner={false} onClick={vi.fn} />);

    const getChip = screen.getByTestId("chip");

    expect(getChip.style).toContain("boxShadow");
  });
});
