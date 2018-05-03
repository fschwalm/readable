import React from 'react';

function Score({ score, onIncrementScore, onDecrementScore }) {
  return (
    <div>
      <span>Vote score: </span>
      <button onClick={onDecrementScore}>-</button>
      <span>{score}</span>
      <button onClick={onIncrementScore}>+</button>
    </div>
  );
}

export default Score;
