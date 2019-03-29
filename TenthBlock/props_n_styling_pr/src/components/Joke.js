import React from 'react';

function Joke(props) {
  return (
    <div
      className='joke-item'
      style={{
        backgroundColor: props.content.question ? '#EEE' : '#DDD'
      }}>
      <h3
        style={{
          display: !props.content.question && 'none'
        }}>
        Question: {props.content.question}
      </h3>
      <p
        style={{
          color: !props.content.question && '#999'
        }}>
        Punch: {props.content.punchLine}
      </p>
    </div >
  );
}

export default Joke;
