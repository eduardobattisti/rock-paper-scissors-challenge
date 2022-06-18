import styled from "styled-components";
import { ITitleProps } from "./Title.interface";

const TitleStyle = styled.h1<Omit<ITitleProps, "tag">>`
  font-size: ${({ theme, fs }) => theme.font.size[fs]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme, fw }) => theme.font.weight[fw]};
`;

export default TitleStyle;
