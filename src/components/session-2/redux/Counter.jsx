import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { by10, dec, inc, reset } from './Sclise';

const Counter = () => {
    let dispatch = useDispatch();
    let count = useSelector((state) => state.myKey.count)
  return (
    <div>Counter
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(inc())}>+</button>
            <button onClick={() => dispatch(dec())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(by10(10))}>by10</button>
        </div>
    </div>
  )
}

export default Counter