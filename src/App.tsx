import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p>Welcome to the Tic Tac Toe game!</p>

      <div className="game-board">
        <div className="board-row">
          <div className="board-cell">X</div>
          <div className="board-cell">O</div>
          <div className="board-cell">X</div>
        </div>
        <div className="board-row">
          <div className="board-cell">O</div>
          <div className="board-cell">X</div>
          <div className="board-cell">O</div>
        </div>
        <div className="board-row">
          <div className="board-cell">X</div>
          <div className="board-cell">O</div>
          <div className="board-cell">X</div>
        </div>
      </div>
    </div>
  );
}

export default App;
