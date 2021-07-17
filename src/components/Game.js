import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

// history: tictactoe we need to keep up with 9 things in an array
// xIsNext: x is always going to start first, initial val: true
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  // who's turn? if X is next, 'X'
  const xo = xIsNext ? 'X' : 'O';
}