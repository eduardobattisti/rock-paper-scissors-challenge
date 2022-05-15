import React from "react";
import Title from "@components/Title";
import { HeadingTag } from "@components/Title/Title.interface";
import Theme from "@/Theme";
import { render, cleanup } from "@testing-library/react";

describe("Title Component", () => {
  let wrapperComponent: HTMLDivElement;

  const wrapper = (tag: HeadingTag = "h2") => {
    return render(
      <Theme>
        <Title tag={tag} fs="base" fw="semiBold" color="white">
          Title Test
        </Title>
      </Theme>
    );
  };

  afterEach(cleanup);

  it("Should render Title without errors", () => {
    expect(wrapper()).toBeDefined();
  });

  it("Should render the text provided", () => {
    const { getByText } = wrapper();
    const titleText = getByText(/Title Test/i);
    expect(titleText).toBeDefined();
  });

  it("Should be mounted with a H2 tag", () => {
    const { container } = wrapper();
    const baseElement = container.querySelector("h2");
    expect(baseElement?.tagName).toBe("H2");
  });

  it("Should render a H1, if an unavailable tag is passed", () => {
    const { container } = wrapper("a");
    const baseElement = container.querySelector("h1");
    expect(baseElement?.tagName).toBe("H1");
  });
});
