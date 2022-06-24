import React from "react";
import BoardStyle from "./Board.style";

const Board = ({ children }: { children: React.ReactNode }) => {
  return <BoardStyle>{children}</BoardStyle>;
};

export { Board };
