import React from 'react';
import Cell from './components/Cell';
import './App.css';

function App() {
  const [cells, setCells] = React.useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = React.useState('X');

  const handleCellClick = (index: number) => {
    if (cells[index]) return; // Ignore if cell is already filled
    const newCells = [...cells];
    newCells[index] = currentPlayer
    setCells(newCells);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // Switch player
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p>Welcome to the Tic Tac Toe game!</p>
      <div className="game-board">
        <div className="board-row">
          <Cell value={cells[0]} onClick={() => handleCellClick(0)} currentPlayer={currentPlayer} />
          <Cell value={cells[1]} onClick={() => handleCellClick(1)} currentPlayer={currentPlayer} />
          <Cell value={cells[2]} onClick={() => handleCellClick(2)} currentPlayer={currentPlayer} />
        </div>
        <div className="board-row">
          <Cell value={cells[3]} onClick={() => handleCellClick(3)} currentPlayer={currentPlayer} />
          <Cell value={cells[4]} onClick={() => handleCellClick(4)} currentPlayer={currentPlayer} />
          <Cell value={cells[5]} onClick={() => handleCellClick(5)} currentPlayer={currentPlayer} />
        </div>
        <div className="board-row">
          <Cell value={cells[6]} onClick={() => handleCellClick(6)} currentPlayer={currentPlayer} />
          <Cell value={cells[7]} onClick={() => handleCellClick(7)} currentPlayer={currentPlayer} />
          <Cell value={cells[8]} onClick={() => handleCellClick(8)} currentPlayer={currentPlayer} />
        </div>
      </div>
    </div>
  );
}

export default App;
