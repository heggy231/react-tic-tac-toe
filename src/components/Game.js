import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

// history: tictactoe we need to keep up with 9 things in an array
// xIsNext: x is always going to start first, initial val: true
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  // who's turn? if X is next, 'X'
  const xo = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    // create copy of current history (begining to current point in time), by spread operator, taking the values then insert inside of the array
    // var newFlavors = ['Strawberry', 'Mint Chocolate Chip', 'Superman'];
    // var heggyFlavors = [...newFlavors];
    // heggyFlavors => ['Strawberry', 'Mint Chocolate Chip', 'Superman']
    // https://codepen.io/heggy231/pen/wvddmqr?editors=0012
    const squares = [...current];
    // return if Won or Occupied (squares[i] is not null)
    //  if you click on an occupied square, do nothing
    //  if the game is won, do nothing
    if (winner || squares[i]) return;
    // if game not over, nor square is not occupied,
    //  Select Square
    squares[i] = xO; // who's turn? if X is next, 'X'
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => 
    history.map((_step, move) => {
      // if move is not zero go to move num, if first move => Go to start
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          
        </li>
      );
    });

  return (
    <>
      <h1> React Tic Tac Toe - Using hooks, es6</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xo}</h3>
      </div>
    </>
  );
};

export default Game;
