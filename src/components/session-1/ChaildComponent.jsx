import React from 'react'

const ChaildComponent = (p) => {
    const [count,setCount] = p.s;
    console.log(p.value);
    console.log(p.state);
    console.log(p.obj);
    console.log(p.s);
  return (
    <div>ChaildComponent
        <h1>{p.value}</h1>
        <div>
            {
                p.state.map((e,i) => {
                    return(
                        <div key={i}>{e.name}</div>
                    )
                })
            }
        </div>
        <div>{p.obj.name+p.obj.age+p.obj.id}</div>
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    </div>
  )
}

export default ChaildComponent