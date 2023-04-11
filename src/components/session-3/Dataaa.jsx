import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
const Dataaa = () => {
  const {data} = useLocation().state;
  console.log(data);
  return (
    <div>Dataaa
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.password}</h1>
    </div>
  )
}

export default Dataaa