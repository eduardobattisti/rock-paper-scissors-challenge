import React from "react";

import styled from "styled-components";
import { ITitleProps } from "./Title.interface";

const HeadingStyle = styled.h1<Omit<ITitleProps, "tag">>`
  font-size: ${({ theme, fs }) => theme.font.size[fs]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme, fw }) => theme.font.weight[fw]};
`;

const Title = ({ tag = "h1", fs, fw, color, children }: ITitleProps) => {
  const allowedTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

  return (
    <HeadingStyle
      as={allowedTags.includes(tag) ? tag : "h1"}
      fs={fs}
      fw={fw}
      color={color}
    >
      {children}
    </HeadingStyle>
  );
};

export { Title };
