import React from "react";
import styled from "styled-components";
import { IChipProps, ChipTypes, ChipPositions } from "./Chip.interface";
import RockImg from "@/assets/images/icon-rock.svg";
import PaperImg from "@/assets/images/icon-paper.svg";
import ScissorsImg from "@/assets/images/icon-scissors.svg";

const imageByType = (type: string) => {
  switch (type) {
    case ChipTypes.PAPER:
      return PaperImg;
    case ChipTypes.ROCK:
      return RockImg;
    case ChipTypes.SCISSOR:
      return ScissorsImg;
  }
};

const positionByType = (type: string) => {
  switch (type) {
    case ChipTypes.PAPER:
      return ChipPositions.paper;
    case ChipTypes.ROCK:
      return ChipPositions.rock;
    case ChipTypes.SCISSOR:
      return ChipPositions.scissors;
  }
};

const ChipStyle = styled.div<IChipProps>`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  cursor: pointer;
  margin: auto;
  background-image: url(${({ type }) => imageByType(type)});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 40%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme, type }) =>
    `inset 0 20px 0 -5px hsl(0 0% 90%), 
    0 0 0 35px ${theme.colors.primary[type].to}, 
    0 12px 0 35px ${theme.colors.primary[type].from}`};
  grid-column: ${({ type }) => positionByType(type)?.column};
  grid-row: ${({ type }) => positionByType(type)?.row};
`;

export default ChipStyle;
