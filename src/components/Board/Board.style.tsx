import React from "react";
import styled from "styled-components";

const BoardStyle = styled.div`
  width: 520px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: ${({ theme }) => `2px solid ${theme.colors.neutral.headerOutline}`};
  border-radius: 0.7rem;
`;

export default BoardStyle;
