import React from "react";
import Button from "@components/Button";
import themeWrapper from "../helpers/themeWrapper";
import { cleanup, fireEvent, screen } from "@testing-library/react";

describe("Button Component", () => {
  afterEach(cleanup);

  it("Should render Button without errors", () => {
    const wrapper = themeWrapper(
      <Button var="solid" label="Test" onClick={vi.fn}>
        Default Button
      </Button>
    );
    expect(wrapper).toBeDefined();
  });

  it("Should present the label text", () => {
    themeWrapper(
      <Button var="solid" label="Test" onClick={vi.fn}>
        Default Button
      </Button>
    );

    const label = screen.getByText(/Test/i);

    expect(label).toBeDefined();

  });

  it("Method is called when an event click happens", () => {
    const handleClick = vi.fn();

    themeWrapper(
      <Button var="solid" label="Test" onClick={handleClick}>
        Default Button
      </Button>
    );


    fireEvent.click(screen.getByText(/Test/i));
    fireEvent.click(screen.getByText(/Test/i));
        
    expect(handleClick).toHaveBeenCalledTimes(2);
  });  

});
