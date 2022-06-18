import React from "react";
import { IButtonProps, Variants } from "./Button.interface";
import styled from "styled-components";

const ButtonStyle = styled.button<IButtonProps>`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme, variant }) =>
    variant === Variants.OUTLINE
      ? theme.colors.white
      : theme.colors.neutral.darkText};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  background-color: ${({ theme, variant }) =>
    variant === Variants.OUTLINE
      ? theme.colors.background.to
      : theme.colors.white};
  border: ${({ theme }) => "1px solid " + theme.colors.white};
`;

const Button = ({ variant, children, onClick }: IButtonProps) => {
  return (
    <ButtonStyle type="button" onClick={onClick} variant={variant}>
      {children}
    </ButtonStyle>
  );
};

export { Button };
