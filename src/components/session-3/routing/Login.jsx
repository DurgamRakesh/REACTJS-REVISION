import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  });

  const navigete = useNavigate()
  const hc = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const hd = (e) => {
    e.preventDefault()
    navigete('/dataa',{state:{data:data}})
  }
  return (
    <div>Login
      <form onSubmit={hd}>
      <input type='text' name='name' onChange={hc}/>
      <input type='email' name='email' onChange={hc}/>
      <input type='password' name='password' onChange={hc}/>
      <input type='submit' value='sumbit'/>
      </form>
    </div>
    
  )
}

export default Login