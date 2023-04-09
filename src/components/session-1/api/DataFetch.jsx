// import React, { useEffect, useState } from 'react'

// const DataFetch = () => {
//     const [data,setData] = useState([])
//     let url = 'https://jsonplaceholder.typicode.com/users'
//     useEffect(() => {
//         fetch(url).then((res) => res.json()).then((data) => setData(data))
//     },[])
//   return (
//     <div>DataFetch
//         <div>
//             {
//                 data.map((e) => {
//                     const {id,username,email} = e;
//                     return(
//                         <div>
//                             <h1>{id}</h1>
//                             <h3>{username}</h3>
//                             <h5>{email}</h5>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default DataFetch

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [data, setData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        axios.get(url).then((data) => {
            setData(data.data)
        })
    })
    return (
        <div>DataFetch
            <div>
            {
                    data.map((e) => {
                        const { id, username, email } = e;
                        return (
                            <div>
                                <h1>{id}</h1>
                                <h3>{username}</h3>
                                <h5>{email}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DataFetch