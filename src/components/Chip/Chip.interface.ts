export const ChipTypes = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor",
} as const;

type ChipTypesEnum = typeof ChipTypes[keyof typeof ChipTypes];

export interface IChipProps {
  type: ChipTypesEnum;
  isWinner: boolean;
  onClick: () => void;
}
