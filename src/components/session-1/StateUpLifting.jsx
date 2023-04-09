import React, { useState } from 'react'

const StateUpLifting = ({getdata}) => {
    const [val,setVal] = useState('')
    const sendfun  = () => {
        (getdata(val))
    }
  return (
    <div>StateUpLifting
        <div>
            <input type="text" name="name" value={val} onChange={(e) => setVal(e.target.value)} />
            <button onClick={sendfun}>send</button>
        </div>
    </div>
  )
}

export default StateUpLifting