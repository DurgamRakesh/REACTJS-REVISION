import React from 'react'

const Counter = (props) => {
    const [count,setCount] = props.counter;
  return (
    <div>counter
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default Counter