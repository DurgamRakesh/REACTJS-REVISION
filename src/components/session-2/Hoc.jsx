import React from 'react'

const Hoc = (Component) => {
  return () => {
    let userauth = false;
    return (
        userauth ? <Component/> : <h1>Please Login!!!</h1>
    )
  }
}

export default Hoc