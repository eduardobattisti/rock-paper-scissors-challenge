import React from "react";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type FontSize = "tiny" | "base" | "lg";
export type FontWeight = "semiBold" | "bold";
export type TextColor = "white" | "darkText" | "scoreText" | "headerOutline";

export interface ITitleProps {
  as?: string;
  tag: HeadingTag;
  fs: FontSize;
  fw: FontWeight;
  color: TextColor;
  children: React.ReactNode;
}
