import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../../App'
const Student = () => {
    let data = useContext(store);
    console.log(data);
  return (
    <div>Student
        <div>
            {
                data.map((e) => {
                    return(
                        <Link to={`/student/${e.id}`} key={e.id}>
                        <div style={{width:"200px",height:"300px", margin:"20px"}}>
                            <h1>{e.name}</h1>
                            <h1>{e.age}</h1>
                            <h1>{e.id}</h1>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Student