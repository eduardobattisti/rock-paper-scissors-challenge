import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Title from "@components/Title";
import { HeadingTag } from "@components/Title/Title.interface";
import Theme from "@/Theme";
import { render } from "../../test-utils";

describe("Title Component", () => {
  let wrapperComponent: HTMLDivElement;

  const wrapper = (container: HTMLDivElement, tag: HeadingTag = "h2") => {
    return render(
      <Theme>
        <Title tag={tag} fs="base" fw="semiBold" color="white">
          Title Test
        </Title>
      </Theme>,
      container
    );
  };

  beforeEach(() => {
    wrapperComponent = document.createElement("div");
    document.body.appendChild(wrapperComponent);
  });

  afterEach(() => {
    unmountComponentAtNode(wrapperComponent);
    wrapperComponent.remove();
  });

  it("Should render Title without errors", () => {
    wrapper(wrapperComponent);
  });

  it("Should render the text provided", () => {
    const { getByText } = wrapper(wrapperComponent);
    const titleText = getByText(/Title Test/i);
    expect(titleText).toBeInTheDocument();
  });

  it("Should be mounted with a H2 tag", () => {
    const { container } = wrapper(wrapperComponent);
    const baseElement = container.querySelector("h2");
    expect(baseElement?.tagName).toBe("H2");
  });

  it("Should render a H1, if an unavailable tag is passed", () => {
    const { container } = wrapper(wrapperComponent, "a");
    const baseElement = container.querySelector("h1");
    expect(baseElement?.tagName).toBe("H1");
  });
});
