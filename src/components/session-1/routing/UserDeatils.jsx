import React, { useContext } from 'react'
import { store } from '../../../App';
import { useNavigate, useParams } from 'react-router-dom';

const UserDeatils = () => {
    const navigate = useNavigate();
    const data = useContext(store);
    // console.log(data);
    const {userid} = useParams()
    // console.log(userid);
    const userdata = data.find((e) => e.id == userid)
    // console.log(userdata);
  return (
    <div>UserDeatils
        <div style={{width:"200px",height:"300px",border:"2px solid black"}}>
            <h1>{userdata.name}</h1>
            <h1>{userdata.age}</h1>
            <h1>{userdata.id}</h1>
        </div>
        <button onClick={() => navigate(-1)}>back</button>
    </div>
  )
}

export default UserDeatils