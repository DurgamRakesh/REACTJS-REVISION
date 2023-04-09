import { cleanup } from '@testing-library/react'
import React, { useEffect } from 'react'

const Login = () => {
  useEffect(() => {
    
    return function(){
      alert('closed')
    }
  })
  useEffect(() => {
    alert('first render')
  },[])
  return (
    <div>
      <h1>Login Page!!!</h1>
    </div>
  )
}

export default Login