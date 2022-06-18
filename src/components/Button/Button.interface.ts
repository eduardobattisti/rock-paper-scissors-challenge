import React from "react";

export const Variants = {
  SOLID: "solid",
  OUTLINE: "outline",
} as const;

type VariantsEnum = typeof Variants[keyof typeof Variants];

export interface IButtonProps {
  children: React.ReactNode;
  variant: VariantsEnum;
  onClick: () => void;
}
