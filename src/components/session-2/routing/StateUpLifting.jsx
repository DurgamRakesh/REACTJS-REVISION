import React, { useState } from 'react'

const StateUpLifting = (props) => {
    const [name,setName] = useState('')
  return (
    <div>StateUpLifting
        <div>
            <input type='text' onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => props.getdata(name)}>send</button>
        </div>
    </div>
  )
}

export default StateUpLifting