import React from 'react';

const Display = ({ time }) => {
  return (
    <div>
      <span>{('0' + Math.floor((time / (60 * 60)) % 60)).slice(-2)}</span>&nbsp;:&nbsp;
      <span>{('0' + (Math.floor(time / 60) % 60)).slice(-2)}</span>&nbsp;:&nbsp;
      <span>{('0' + Math.floor(time % 60)).slice(-2)}</span>
    </div>
  );
};

export default Display;
