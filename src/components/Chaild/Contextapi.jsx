import React, { useState } from 'react'
import { store } from '../../App'
import { useContext } from 'react'
const Contextapi = () => {
    const [data,setData] = useContext(store);
    const [name,setName] = useState('')
    console.log(data);
    const had = () => {
        setData([...data,{name:name}])
    }
    const delfun = (i) => {
        let newvalues = [...data];
        newvalues.splice(i,1);
        setData([...newvalues])
    }
  return (
    <div>Contextapi
        <input type="text" onChange={(e) =>setName(e.target.value)} />
        <button onClick={had}> add</button>
        <div>
            {
                (data.length > 0) ?data.map((e,i) => {
                    return(
                        <div key={i} style={{margin:"10px"}}>
                            <span>{e.name} </span>
                            <button onClick={() => delfun(i)}>del</button>
                        </div>
                    )
                }) : <h1>no todos</h1>
            }
        </div>
    </div>
  )
}

export default Contextapi