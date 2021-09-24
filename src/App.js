import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from './redux/counterSlice';
import './style.css';

export default function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(Number(10) || 0))}>
        increment by 10
      </button>
    </div>
  );
}
