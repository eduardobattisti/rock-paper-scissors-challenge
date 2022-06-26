export const ChipTypes = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissors",
} as const;

export const ChipPositions = {
  rock: {
    column: "3",
    row: "2",
  },
  paper: {
    column: "2",
    row: "1",
  },
  scissors: {
    column: "4",
    row: "1",
  },
};

type ChipTypesEnum = typeof ChipTypes[keyof typeof ChipTypes];

export interface IChipProps {
  type: ChipTypesEnum;
  isWinner: boolean;
  onClick: () => void;
}
