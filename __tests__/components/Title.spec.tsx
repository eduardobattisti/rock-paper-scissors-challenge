import React from "react";
import Title from "@components/Title";
import themeWrapper from "../helpers/themeWrapper";
import { cleanup } from "@testing-library/react";

describe("Title Component", () => {
  afterEach(cleanup);

  it("Should render Title without errors", () => {
    const wrapper = themeWrapper(
      <Title tag="h2" fs="base" fw="semiBold" color="white">
        Title Test
      </Title>
    );
    expect(wrapper).toBeDefined();
  });

  it("Should render the text provided", () => {
    const { getByText } = themeWrapper(
      <Title tag="h2" fs="base" fw="semiBold" color="white">
        Title Test
      </Title>
    );
    const titleText = getByText(/Title Test/i);
    expect(titleText).toBeDefined();
  });

  it("Should be mounted with a H2 tag", () => {
    const { container } = themeWrapper(
      <Title tag="h2" fs="base" fw="semiBold" color="white">
        Title Test
      </Title>
    );
    const baseElement = container.querySelector("h2");
    expect(baseElement?.tagName).toBe("H2");
  });

  //TODO - Analyze the test needs.
  // This is testing the framework or some implementation?

  it("Should render a H1, if an unavailable tag is passed", () => {
    const { container } = themeWrapper(
      <Title tag="a" fs="base" fw="semiBold" color="white">
        Title Test
      </Title>
    );
    const baseElement = container.querySelector("h1");
    expect(baseElement?.tagName).toBe("H1");
  });
});
