import React from 'react';

// props destructuring { }, value is X or O in TicTacToe
const Square = ({ value, onClick }) => {
  // assign style only if the value (X or O) is NOT `null`
  const style = value ? `squares ${value}` : 'squares';

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;