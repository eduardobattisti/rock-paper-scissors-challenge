import React from "react";
import Button from "@components/Button";
import themeWrapper from "../helpers/themeWrapper";
import { cleanup, fireEvent, screen } from "@testing-library/react";

describe("Button Component", () => {
  afterEach(cleanup);

  it("Should render Button without errors", () => {
    const wrapper = themeWrapper(
      <Button variant="solid" onClick={vi.fn}>
        Default Button
      </Button>
    );
    expect(wrapper).toBeDefined();
  });

  it("Should present the label text", () => {
    themeWrapper(
      <Button variant="solid" onClick={vi.fn}>
        Default Button
      </Button>
    );

    const label = screen.getByText(/Default Button/i);

    expect(label).toBeDefined();
  });

  it("Method is called when an event click happens", () => {
    const handleClick = vi.fn();

    themeWrapper(
      <Button variant="solid" onClick={handleClick}>
        Default Button
      </Button>
    );

    const getButton = screen.getByText(/Default Button/i);

    fireEvent.click(getButton);
    fireEvent.click(getButton);

    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
