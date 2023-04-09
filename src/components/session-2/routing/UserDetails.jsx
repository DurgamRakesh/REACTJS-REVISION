import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { store } from '../../../App';
const UserDetails = () => {
    let data = useContext(store);
    let param = useParams();
    console.log(param);
    let user  = data.find((e) => e.id == param.id); 
    console.log(user);   
  return (
    <div>UserDetails
        <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.id}</h1>
        </div>
    </div>
  )
}

export default UserDetails