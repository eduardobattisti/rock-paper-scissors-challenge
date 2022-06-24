import React from "react";
import styled from "styled-components";

const ScoreStyle = styled.div`
  width: 100px;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.neutral.darkText};
  border-radius: 0.7rem;
  letter-spacing: ${({ theme }) => theme.font.spacing.small};
  text-align: center;
`;

const ScorePointsStyle = styled.p`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkText};
`;

export { ScoreStyle, ScorePointsStyle };
