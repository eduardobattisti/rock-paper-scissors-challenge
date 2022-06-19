import React from "react";
import styled from "styled-components";
import { IChipProps } from "./Chip.interface";
import RockImg from "@/assets/images/icon-rock.svg";

const ChipStyle = styled.div<IChipProps>`
  margin-top: 100px;
  margin-left: 100px;

  width: 255px;
  height: 255px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${RockImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 40%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: inset 0 20px 0 -5px hsl(0 0% 90%), 0 0 0 35px hsl(349, 70%, 56%),
    0 12px 0 35px hsl(349 65% 47%);
`;

export default ChipStyle;
