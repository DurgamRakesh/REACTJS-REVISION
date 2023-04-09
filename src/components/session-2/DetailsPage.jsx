import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const DetailsPage = () => {
    const { data } = useLocation().state
    let arr = [];
    // console.log(data);
    arr.push(data)
    return (
        <div style={{ display: "grid", placeItems: "center" }}>
            {
                arr && arr.map((data, i) => {
                    return (
                        <div key={i}>
                            <h1>Details of User:</h1>
                            <div style={{ height: "200px", width: "300px", border: "2px solid black", textAlign: "center" }}>
                                <h1>Name:{data.name}</h1>
                                <h3>Email:{data.email}</h3>
                                <h5>Password:{data.password}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DetailsPage