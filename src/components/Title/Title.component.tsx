import React from "react";
import { ITitleProps } from "./Title.interface";
import TitleStyle from "./Title.style";

const Title = ({ tag = "h1", fs, fw, color, children }: ITitleProps) => {
  const allowedTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

  return (
    <TitleStyle
      as={allowedTags.includes(tag) ? tag : "h1"}
      fs={fs}
      fw={fw}
      color={color}
    >
      {children}
    </TitleStyle>
  );
};

export { Title };
