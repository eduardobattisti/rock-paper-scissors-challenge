import React from "react";
import ChipStyle from "./Chip.style";
import { IChipProps } from "./Chip.interface";

const Chip = ({ type, isWinner, onClick }: IChipProps) => {
  return (
    <ChipStyle
      data-testid="chip"
      type={type}
      isWinner={isWinner}
      onClick={onClick}
    />
  );
};

export { Chip };
