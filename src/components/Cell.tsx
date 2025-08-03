import React from 'react';

function Cell({ value, onClick, currentPlayer }: { value: string | null, onClick: () => void, currentPlayer: string }) {

  return (
    <div className="board-cell" onClick={onClick}>
      {!value && <span className="current-player">{currentPlayer}</span>}
      {value}
    </div>
  );
}

export default Cell;
