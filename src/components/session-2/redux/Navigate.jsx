import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navigate = () => {
  const [name,setName] = useState('');
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() =>navigate('/datapage',{state:{name:name}})}>send</button>
    </div>
  )
}

export default Navigate