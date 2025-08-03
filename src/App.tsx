import React from 'react';
import Cell from './components/Cell';
import './App.css';

function App() {
  const [cells, setCells] = React.useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = React.useState('X');
  const [winner, setWinner] = React.useState<string | null>(null);

  const handleCellClick = (index: number) => {
    if (cells[index] || winner) return; // Ignore if cell is already filled or game is over
    const newCells = [...cells];
    newCells[index] = currentPlayer
    setCells(newCells);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // Switch player

    checkWinner(newCells);
  };

  const checkWinner = (cells: (string | null)[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setWinner(cells[a]); // Set the winner
      }
    }
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p>Welcome to the Tic Tac Toe game!</p>
      <div className="game-board">
        <div className="board-row">
          <Cell
            value={cells[0]}
            onClick={() => handleCellClick(0)}
            currentPlayer={currentPlayer}
          />
          <Cell
            value={cells[1]}
            onClick={() => handleCellClick(1)}
            currentPlayer={currentPlayer}
          />
          <Cell
            value={cells[2]}
            onClick={() => handleCellClick(2)}
            currentPlayer={currentPlayer}
          />
        </div>
        <div className="board-row">
          <Cell
            value={cells[3]}
            onClick={() => handleCellClick(3)}
            currentPlayer={currentPlayer}
          />
          <Cell
            value={cells[4]}
            onClick={() => handleCellClick(4)}
            currentPlayer={currentPlayer}
          />
          <Cell
            value={cells[5]}
            onClick={() => handleCellClick(5)}
            currentPlayer={currentPlayer}
          />
        </div>
        <div className="board-row">
          <Cell
            value={cells[6]}
            onClick={() => handleCellClick(6)}
            currentPlayer={currentPlayer}
          />
          <Cell
            value={cells[7]}
            onClick={() => handleCellClick(7)}
            currentPlayer={currentPlayer}
          />
          <Cell
            value={cells[8]}
            onClick={() => handleCellClick(8)}
            currentPlayer={currentPlayer}
          />
        </div>
        <div className="game-info mt-3">
          {winner && (
            <h2>Winner: {winner}</h2>
          )}
          <button className="btn btn-lg btn-secondary mt-3" onClick={() => {
            setCells(Array(9).fill(null)); // Reset the game
            setCurrentPlayer('X'); // Reset to player X
            setWinner(null); // Reset winner
          }}>
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
