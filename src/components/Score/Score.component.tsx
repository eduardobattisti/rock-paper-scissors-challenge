import React from "react";
import { ScoreStyle, ScorePointsStyle } from "./Score.style";
import { IScoreProps } from "./Score.interface";
import Title from "../Title";

const Score = ({ score }: IScoreProps) => {
  return (
    <ScoreStyle>
      <Title tag="h4" color="scoreText" fs="lg" fw="semiBold">
        SCORE
      </Title>
      <ScorePointsStyle data-testid="score">{score}</ScorePointsStyle>
    </ScoreStyle>
  );
};

export { Score };
