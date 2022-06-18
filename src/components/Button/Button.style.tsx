import React from "react";
import { IButtonProps, Variants } from "./Button.interface";
import styled from "styled-components";

const ButtonStyle = styled.button<IButtonProps>`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme, variant }) =>
    variant === Variants.OUTLINE
      ? theme.colors.white
      : theme.colors.neutral.darkText};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: ${({ theme }) => theme.font.spacing.small};
  background-color: ${({ theme, variant }) =>
    variant === Variants.OUTLINE ? "transparent" : theme.colors.white};
  border: ${({ theme }) => "1px solid " + theme.colors.white};
  border-radius: 8px;
  padding: 0.7rem 2rem;

  &:hover {
    color: ${({ theme, variant }) =>
      variant === Variants.OUTLINE
        ? theme.colors.white
        : theme.colors.primary.rock.from};
    cursor: pointer;
  }
`;

export default ButtonStyle;
