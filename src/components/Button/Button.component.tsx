import React from "react";
import { IButtonProps } from "./Button.interface";
import ButtonStyle from "./Button.style";

const Button = ({ variant, children, onClick }: IButtonProps) => {
  return (
    <ButtonStyle type="button" onClick={onClick} variant={variant}>
      {children}
    </ButtonStyle>
  );
};

export { Button };
