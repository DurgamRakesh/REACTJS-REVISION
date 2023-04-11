import React from 'react'
import Login from './Login';

const Hoc = (Component) => {
  return () => {
    let userAuth = false;
    return (
        userAuth ? <Component/> :  <Login/>
    )
  }
}

export default Hoc