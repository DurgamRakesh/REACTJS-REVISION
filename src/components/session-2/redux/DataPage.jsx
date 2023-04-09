import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'

const DataPage = () => {
    var {name} = useLocation().state;
    const navigate = useNavigation();
    // const back = () => {
    //     navigate(-1)
    //     name=""
    // }
  return (
    <div>DataPage
        <h1>{name}</h1>
        <button onClick={() => navigate('-1')}>back</button>
    </div>
  )
}

export default DataPage