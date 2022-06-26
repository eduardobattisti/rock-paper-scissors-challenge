import React from "react";
import styled from "styled-components";

const ChipContainerStyle = styled.div`
  background-image: url("./src/assets/images/bg-triangle.svg");
  background-repeat: no-repeat;
  background-position: center 120px;
  background-size: contain;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(2, 280px);
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  grid-row-gap: 90px;
`;

export default ChipContainerStyle;
