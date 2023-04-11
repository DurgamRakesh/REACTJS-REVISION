import React, { useContext } from 'react'
import { store } from '../../../App';
import {useParams} from 'react-router-dom'
const UserDetails = () => {
    const data = useContext(store);
    const {id} = useParams()
    const user = data.find((e) => e.id == id);
  return (
    <div>UserDetails
        <div style={{width:"300px",height:"200px",border:"2px solid black"}}>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.id}</h1>
        </div>
    </div>
  )
}

export default UserDetails