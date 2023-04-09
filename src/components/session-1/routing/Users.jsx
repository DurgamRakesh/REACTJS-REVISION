import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styes.css'
import { store } from '../../../App'

const Users = () => {
    let data = useContext(store)
    console.log(data);
  return (
    <div>Users
        <div className='con'>
            {
                data.map((e) =>{
                    return(
                        <Link key={e.id} to={`/users/${e.id}`} data={[data]}>
                        <div className='box'>
                            <p>UserDeatils:</p>
                            <h1>{e.name}</h1>
                            <h1>{e.age}</h1>
                            <h1>{e.id}</h1>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Users