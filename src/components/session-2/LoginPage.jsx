import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const hc = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handle = () => {
    navigate('/detailspage',{state:{data:data}})
  }
  return (
    <div>LoginPage

      <div>
        <input type="text" name="name" onChange={hc} />
        <input type="email" name="email" onChange={hc} />
        <input type="password" name="password" onChange={hc} />
        <button onClick={handle}>send</button>
      </div>
    </div>
  )
}

export default LoginPage