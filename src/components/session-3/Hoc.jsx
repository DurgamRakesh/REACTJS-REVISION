import React from 'react'

const Hoc = (Component) => {
  return () => {
    let userAuth = false
    return(
        userAuth ? <Component/> : <p>Please Login!!!</p>
    )
  }
}

export default Hoc