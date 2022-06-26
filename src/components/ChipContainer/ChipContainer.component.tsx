import React from "react";
import { IChipContainerProps } from "./ChipContainer.interface";
import ChipContainerStyle from "./ChipContainer.style";

const ChipContainer = ({ children }: IChipContainerProps) => {
  return <ChipContainerStyle>{children}</ChipContainerStyle>;
};

export { ChipContainer };
