import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc, dec, reset, incby10 } from './Slice'

const Counter = () => {
    const dispatch = useDispatch();
    const c = useSelector((state) => state.myKey.count)
    console.log(c);
  return (
    <div>Counter
            <h1>{c}</h1>
            <button onClick={() => dispatch(inc())}>+</button>
            <button onClick={() => dispatch(dec())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(incby10(10))}>inby10</button>
    </div>
  )
}

export default Counter