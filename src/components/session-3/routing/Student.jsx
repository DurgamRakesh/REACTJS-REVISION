import React, { useContext } from 'react'
import { store } from '../../../App'
import {Link}  from 'react-router-dom';
const Student = () => {
    const data = useContext(store)
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>Student
        {
            data.map((e) => {
                return(
                    <Link to={`/student/${e.id}`} key={e.id}>
                    <div style={{width:"200px",height:"200px",marginTop:"10px",border:"2px solid black",padding:"10px"}}>
                        <h1>{e.name}</h1>
                        <h1>{e.age}</h1>
                        <h1>{e.id}</h1>
                    </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Student