export const ChipTypes = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissors",
} as const;

type ChipTypesEnum = typeof ChipTypes[keyof typeof ChipTypes];

export interface IChipProps {
  type: ChipTypesEnum;
  isWinner: boolean;
  onClick: () => void;
}
